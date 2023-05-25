import { Component, OnInit } from '@angular/core';
import { persona } from '../model/persona.model';
import { PersonaService } from '../service/persona.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Storage, ref, uploadBytes, listAll, getDownloadURL } from '@angular/fire/storage';

@Component({
  selector: 'app-edit-main',
  templateUrl: './edit-main.component.html',
  styleUrls: ['./edit-main.component.css']
})
export class EditMainComponent implements OnInit {
  person: persona = null;
  images: string[];
  constructor(private personaS: PersonaService, private activatedRouter: ActivatedRoute, private router: Router, private storage: Storage) {
  }

  uploadImage($event: any) {
    const file = $event.target.files[0];
    console.log(file);

    const imgRef = ref(this.storage, `images/${file.name}`);

    uploadBytes(imgRef, file)
      .then(response => {
        console.log(response)
        this.getImages();
      })
      .catch(error => console.log(error));

  }

  getImages() {
    const imagesRef = ref(this.storage, 'images');

    listAll(imagesRef)
      .then(async response => {
        console.log(response);
        this.images = [];
        for (let item of response.items) {
          const url = await getDownloadURL(item);
          this.images.push(url);
        }
      })
      .catch(error => console.log(error));
  }

  ngOnInit(): void {
    this.getImages();
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaS.getPersona().subscribe(data => {
    this.person = data;
    }, err => {
      alert("Error updating");
      this.router.navigate(['']);
    }
    )
  }



  onUpdate(): void {
    const id = this.activatedRouter.snapshot.params['id'];
    this.personaS.update(this.person).subscribe(data => {
      this.router.navigate(['']);
    }, err => {alert("Error updating");
      this.router.navigate(['']);
      }
    )
  }
}

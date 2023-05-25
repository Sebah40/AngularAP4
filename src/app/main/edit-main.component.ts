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
  image: string = "";
  constructor(private personaS: PersonaService, private activatedRouter: ActivatedRoute, private router: Router, private storage: Storage) {
  }

  uploadImage($event:any){
    const file = $event.target.files[0];
    console.log(file);
    const imgRef = ref(this.storage, `image/${file.name}`)
    uploadBytes(imgRef, file)
    .then(response => console.log(response))
    .catch(error => console.log(error));
  }

  getImage() {
    const imagesRef = ref(this.storage, 'images');

    listAll(imagesRef)
      .then(async response => {
        console.log(response);
        this.image = "";
        for (let item of response.items) {
          const url = await getDownloadURL(item);
          this.image = url;
        }
      })
      .catch(error => console.log(error));
  }
  ngOnInit(): void {
    this.getImage();
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

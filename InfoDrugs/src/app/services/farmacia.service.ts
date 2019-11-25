import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { map } from 'rxjs/operators';
import { Farmacia } from '../model/farmacia';

@Injectable({
  providedIn: 'root'
})
export class FarmaciaService {

  constructor(
    protected fire: AngularFirestore,
    protected afAuth: AngularFireAuth
  ) { }

  save(farmacia) {
    return this.afAuth.auth.createUserWithEmailAndPassword(farmacia.email, farmacia.pws)
      .then(
        res => {
          return this.fire.collection('farmacia').doc(res.user.uid).set({
            nome: farmacia.nome,
            nickname: farmacia.nickname,
            email: farmacia.email,
            pws: farmacia.pws,
            ativo: farmacia.ativo,
            lat: farmacia.lat,
            lng: farmacia.lng
          });
        }
      )
  }

  getAll() {
    return this.fire.collection('farmacia').snapshotChanges()
      .pipe(
        map(dados =>
          dados.map(d => ({ key: d.payload.doc.id, ...d.payload.doc.data() }))
        )
      )
  }

  get(id) {
    return this.fire.collection('farmacia').doc<Farmacia>(id).valueChanges();
  }

  update(farmacia: Farmacia, id: string) {
    return this.fire.collection('farmacia').doc<Farmacia>(id)
      .update(farmacia);
  }

  remove(farmacia: any) {
    return this.fire.collection('farmacia').doc(farmacia.key).delete();
  }

}

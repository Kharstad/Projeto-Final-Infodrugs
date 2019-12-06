import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { map } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { Remedio } from '../model/remedio';

@Injectable({
  providedIn: 'root'
})
export class RemedioService {

  constructor(
    protected fire: AngularFirestore,
    public afAuth: AngularFireAuth
  ) { }
  save(remedio) {
    return this.afAuth.auth.createUserWithEmailAndPassword(remedio.nome, remedio.preco)
      .then(
        res => {
          return this.fire.collection("remedios").doc(res.user.uid).set({
            nome: remedio.nome,
            descricao: remedio.descricao,
            farmacia: remedio.farmacia,
            quantidade: remedio.quantidade,
            preco: remedio.preco
          });
        }
      )
  }


  getALL() {
    return this.fire.collection("remedios").snapshotChanges()
      .pipe(
        map(dados =>
          dados.map(d => ({ key: d.payload.doc.id, ...d.payload.doc.data() }))
        )
      )
  }
  get(id) {
    return this.fire.collection("remedios").doc<Remedio>(id).valueChanges();
  }
  update(remedio, id) {
    return this.fire.collection("remedios").doc<Remedio>(id).update(remedio);
  }
  remove(remedio: any) {
    return this.fire.collection("remedios").doc(remedio.key).delete();
  }
}



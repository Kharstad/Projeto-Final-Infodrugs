import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Remedio } from '../model/remedio';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RemedioService {

  constructor(
    protected fire: AngularFirestore,
    protected afAuth: AngularFireAuth
  ) { }
  save(remedio) {
    return this.fire.collection("remedio").add({

      nome: remedio.nome,
      descricao: remedio.descricao,
      preco: remedio.preco,
      farmacia: remedio.farmacia,
      quantidade: remedio.quantidade,
    });


  }

  getAll() {
    return this.fire.collection('remedio').snapshotChanges()
      .pipe(
        map(dados =>
          dados.map(d => ({ key: d.payload.doc.id, ...d.payload.doc.data() }))
        )
      )
  }

  get(id) {
    return this.fire.collection('remedio').doc<Remedio>(id).valueChanges();
  }

  update(remedio: Remedio, id: string) {
    return this.fire.collection('remedio').doc<Remedio>(id)
      .update(remedio);
  }

  remove(remedio: any) {
    return this.fire.collection('remedio').doc(remedio.key).delete();
  }

}

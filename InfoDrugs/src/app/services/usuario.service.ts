import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { AngularFireAuth } from '@angular/fire/auth';
import { Usuario } from '../model/usuario';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    protected fire: AngularFirestore,
    protected afAuth: AngularFireAuth
  ) { }

  save(usuario) {
    return this.afAuth.auth.createUserWithEmailAndPassword(usuario.email, usuario.pws)
      .then(
        res => {
          return this.fire.collection('usuario').doc(res.user.uid).set({
            nome: usuario.nome,
            cpf: usuario.cpf,
            email: usuario.email,
            pws: usuario.pws,
            tipo: usuario.tipo,
            ativo: usuario.ativo,
            lat: usuario.lat,
            lng: usuario.lng
          });
        }
      )
  }

  getAll() {
    return this.fire.collection('usuario').snapshotChanges()
      .pipe(
        map(dados =>
          dados.map(d => ({ key: d.payload.doc.id, ...d.payload.doc.data() }))
        )
      )
  }

  get(id) {
    return this.fire.collection('usuario').doc<Usuario>(id).valueChanges();
  }

  update(usuario: Usuario, id: string) {
    return this.fire.collection('usuario').doc<Usuario>(id).update(usuario);
  }

  remove(usuario: any) {
    return this.fire.collection('usuario').doc(usuario.key).delete();
  }

}

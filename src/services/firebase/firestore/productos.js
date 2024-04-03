import {doc, getDoc, getDocs, collection, query, where, orderBy } from 'firebase/firestore';
import { db } from '../firebaseConfig' 


export const getProductos = (categoria) => {

    const prodColection = categoria ?
    query(collection(db, 'productos'), where('categoria', '==', categoria))
    : query(collection(db, 'productos'), orderBy('nombre'))

    return getDocs(prodColection)
        .then(querySnapshot=> {
            const adaptData = querySnapshot.docs.map(doc => {
                const data = doc.data()  
                return { id: doc.id, ...data}
            })

            return adaptData
        })
        .catch(error => {
            console.log(error)
            })

}

export const getProductoPorId = (itemId) => {

    const productDoc = doc(db, 'productos', itemId)

        return getDoc(productDoc)
            .then(queryDocumentSnapshot => {
                if (queryDocumentSnapshot.exists && queryDocumentSnapshot.data()){
                const data = queryDocumentSnapshot.data()
                const adaptProd = {id: queryDocumentSnapshot.id, ...data}
                return adaptProd
            } else {
                return error
            }
        })
}
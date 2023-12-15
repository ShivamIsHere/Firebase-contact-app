import React from 'react'
import Modal from './Modal'
import {Field, Form, Formik  } from "formik";
import { collection, addDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

const AddAndUpdateContact = ({isOpen,onClose}) => {


  const addContact = async (contact)=>{
    try{
      const contactRef = collection(db,"contacts");
      await addDoc(contactRef,contact);
    }catch (error){
      console.log(error);
    };
  };
  return (
    <div>
          <Modal isOpen={isOpen} onClose={ onClose}>
          <Formik initialValues={{
            name:"",
            email:"",
        }}
        onSubmit={(values)=>{
          // addContact({name:values.name})
          addContact(values);
          }}>
            <Form className='flex flex-col gap-4'>
              <div className='flex flex-col gap-1'>
                <label htmlFor="name">Name</label>
                <Field name="name" className="h-10 border"/>
              </div>
              <div className='flex flex-col gap-1'>
                <label htmlFor="email">Email</label>
                <Field type="email" name="email" className="h-10 border"/>
              </div>
              <button className='bg-orange px-3 py-1.5 border self-end'>
                Add Contact
              </button>
            </Form>
          </Formik>
          </Modal>

    </div>
  )
}

export default AddAndUpdateContact

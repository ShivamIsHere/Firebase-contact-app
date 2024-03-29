import React, { useEffect, useState } from 'react'
import NavBar from './components/NavBar'
import {FiSearch} from "react-icons/fi";
import {AiFillPlusCircle} from "react-icons/ai";
import {db} from "./config/firebase";
import {collection, getDocs, onSnapshot, snapshotEqual } from "firebase/firestore"
import ContactCard from './components/ContactCard';
import AddAndUpdateContact from './components/AddAndUpdateContact';
import useDisclouse from './hooks/useDisclouse';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NoContactFound from './components/NoContactFound';

const App = () => {


  const [contacts,setContacts] =useState([]);

  const {isOpen, onClose,onOpen}= useDisclouse();


  useEffect(()=>{
    const getContacts = async ()=>{

      try{
        const contactsRef =collection(db,"contacts")
        // const contactsSnapshot = await getDocs(contactsRef);
        // console.log(contactsSnapshot)


        onSnapshot(contactsRef,(snapshot)=>{
          // const contactsLists = contactsSnapshot.docs.map((doc)=>{
            const contactsLists = snapshot.docs.map((doc)=>{

            return {
              id: doc.id,
              ...doc.data(),
            };
          });
          // console.log(contactsLists)
          setContacts(contactsLists);
          return contactsLists;
        });



        
      
      }catch(error){
        console.log(error);
      }
    };
    getContacts();
  },[]);



  const filterContacts = (e)=>{
    const value= e.target.value;
    const contactsRef =collection(db,"contacts");
        // const contactsSnapshot = await getDocs(contactsRef);
        // console.log(contactsSnapshot)


        onSnapshot(contactsRef,(snapshot)=>{
          // const contactsLists = contactsSnapshot.docs.map((doc)=>{
            const contactsLists = snapshot.docs.map((doc)=>{

            return {
              id: doc.id,
              ...doc.data(),
            };
          });

          const filteredContacts = contactsLists.filter((contact)=>contact.name.toLowerCase().includes(value.toLowerCase()))
          // console.log(contactsLists)
          setContacts(filteredContacts);
          return filteredContacts;
        });
  }




  return (
    <>
    <div className='max-w-[370px] mx-auto px-4 '>
      <NavBar/>
      <div className='flex gap-2'>
      <div className=' relative items-center flex flex-grow '>
        <FiSearch className='text-white text-3xl absolute ml-1'/>
        <input onChange={filterContacts} type='text' className=' flex-grow  rounded-md border border-white bg-transparent h-10 text-white pl-9'/>
      </div>
      
        <AiFillPlusCircle onClick={onOpen} className='text-5xl text-white cursor-pointer'/>

      </div>
      <div className='mt-4 gap-3 flex-col'>{ contacts.length<=0 ? <NoContactFound/>:
        contacts.map((contact)=>(
          <ContactCard key={contact.id} contact={contact}/>
        ))} 
        </div>
    </div>
    <AddAndUpdateContact onClose={onClose} isOpen={isOpen}/>
    {/* if we remove position='bottom-center' than it will show toast at the top */}
  <ToastContainer position='bottom-center' />
  </>
  )
}


export default App

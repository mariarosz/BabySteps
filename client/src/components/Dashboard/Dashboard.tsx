import { useState, useEffect, useRef } from 'react';
import { Navbar } from '../Navbar/Navbar';
import { getAuth } from 'firebase/auth';
import { db } from '../../firebase';
import { collection, query,getDocs } from 'firebase/firestore';
import './Dashboard.css'
import { Link } from "react-router-dom";




export default function Dashboard() {
  const { currentUser } : any = getAuth();
  const userId = currentUser.uid
  const [babyList, setBabyList] = useState<Baby[]>([]);
  const babyRef = useRef(false);

  type Baby = {
    name: string,
    date: string,
  }

  useEffect(() => {
    async function getData() {
      try {
        const babiesFromDb = query(collection(db, 'users', userId, 'babies'));

        const response = await getDocs<any>(babiesFromDb);
        const userData = response
        return userData.docs.map((baby:any) => {

          return baby.data();
        });
      } catch(error) {
        console.log(error)
      }
    }
    getData()
      .then((result: any) => {
        babyRef.current = true;
        setBabyList(result)
      })
      .catch((err) => {
        console.log(err);
      });
  }, [userId]);

  return (
    <div className="main-container">
      <Navbar />
      <div className='dash-container'>
        <div className='dash-btns-cont'>
        {babyList ? babyList.map(baby =>
          <Link to={baby.name}>
            <div className='baby-selector current-baby'>
              <p>{baby.name}</p>
            </div>
          </Link>) : (null)}
        <Link to={'/addbaby'}>
          <div className='baby-selector add-baby'>
            <span>+</span>
            <p>Add new baby</p>
          </div>
        </Link>
        </div>
      </div>
    </div>
  );
}


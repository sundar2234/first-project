"use client"; 

import { signIn, signOut, useSession } from "next-auth/react";

export function Appbar(){
   const session= useSession();
   return <div>
        <div className='flex justify-between'>
            <div>
                muzi
            </div>
            <div>
                {session.data?.user&& <button className="p-2 m-2 bg-blue-400 " onClick={function onClick(){ signOut()}}> Log out</button>}
                {!session.data?.user&& <button className="p-2 m-2 bg-blue-400 " onClick={function onClick(){ signIn()}}> Sign In </button>}
            </div>
        </div>
    </div>
}
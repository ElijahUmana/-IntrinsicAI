"use client"
import React from 'react'
import { Button } from 'react-bootstrap';
import Link from 'next/link';

function Page({ params }) {
  console.log(params);

  return (
    <div>
      <h1>Website Subject: {params.description}</h1>
      <p>{params.message}</p>
          <Button variant="success" >Continue</Button>
          <Button variant="danger">Submit Different Prompt</Button>
    </div>
  )
}

export default Page;
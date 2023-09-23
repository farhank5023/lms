# Build an LMS Platform: Next.js 13,  React, Stripe, Mux, Prisma, Tailwind, MySQL 

[Live Video Demo](https://drive.google.com/file/d/1Dj9l5DwZUMgsenmYgo3BfZUb_sPNVLDg/view?usp=sharing)

[Website](https://lms-iota-gray.vercel.app/)


## INTRODUCTION
A Learning Management System (LMS) is a web-based platform designed to facilitate the creation, delivery, and management of educational content. It serves as a centralized hub for organizing courses, training materials, assessments, and communication tools, making it an invaluable resource for educational institutions, businesses, and organizations. Through an intuitive interface, users can access learning materials, track progress, participate in discussions, and complete assignments, all within a virtual environment. LMS platforms have revolutionized the way learning is conducted, providing a flexible and scalable solution for both traditional and online education. This technology empowers educators and learners alike to engage in dynamic, interactive, and effective educational experiences.

This is a repository for Build an LMS Platform: Next.js 13,  React, Stripe, Mux, Prisma, Tailwind, MySQL




## GETTING STARTED & USER GUIDE

### Prerequisites

**Node version 18.3.12**

### Cloning the repository

```shell
git clone https://github.com/farhank5023/lms.git
```

### Install packages

```shell
npm i
```

### Setup .env file


```js
//CLERK ACCESS = fk7303544997@gmail.com

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=
CLERK_SECRET_KEY=
NEXT_PUBLIC_CLERK_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_SIGN_UP_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_IN_URL=
NEXT_PUBLIC_CLERK_AFTER_SIGN_UP_URL=

 

//PLANETSCALE ACCESS = KFARHAAN00@GMAIL.COM
DATABASE_URL=



//UPLOAD THING ACCESS = KFARHAAN00@GMAIL.COM
UPLOADTHING_SECRET=
UPLOADTHING_APP_ID=



//MUX ACCESS = FARHANK5023@GMAIL.COM
MUX_TOKEN_ID=
MUX_TOKEN_SECRET=


//STRIPE ACCESS = KFARHAAN00@GMAIL.COM
STRIPE_API_KEY=
NEXT_PUBLIC_APP_URL=http://localhost:3000
STRIPE_WEBHOOK_SECRET=


//THIS ID IS USED TO ACCESS IN TEACHER ACCOUNT. SELECT THE USER ID FROM CLERK AND PUT BELOW TO GIVE TEACHER ACCESS
NEXT_PUBLIC_TEACHER_ID=
```

### Setup Prisma

Add MySQL Database (I used PlanetScale)

```shell
npx prisma generate
npx prisma db push

```

### Start the app

```shell
npm run dev
```

## Available commands

Running commands with npm `npm run [command]`

| command         | description                              |
| :-------------- | :--------------------------------------- |
| `dev`           | Starts a development instance of the app |



## Features:

- Browse & Filter Courses
- Purchase Courses using Stripe
- Mark Chapters as Completed or Uncompleted
- Progress Calculation of each Course
- Student Dashboard
- Teacher mode
- Create new Courses
- Create new Chapters
- Easily reorder chapter position with drag n’ drop
- Upload thumbnails, attachments and videos using UploadThing
- Video processing using Mux
- HLS Video player using Mux
- Rich text editor for chapter description
- Authentication using Clerk
- ORM using Prisma
- MySQL database using Planetscale

## TECH-STACK CHARGES
-CLERK         - PAY AS YOU GO 
- PLANETSCALE  - HOBBY PLAN 0$
- STRIPE       - TEST MODE 0$ (PERCENTAGE BASIS PER PAYMENT)
- UPLOAD THING - 2GB FREE (PAY AS YOU GO OR 10$ MONTH 100GB)
- MUX          - PAY AS YOU GO MODEL (MAX VIDEO IN FREE MODE-10s)

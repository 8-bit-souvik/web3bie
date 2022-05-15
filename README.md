# WEB3BIE

beginner friendly resources to explore web 3.0

![web3bie](https://res.cloudinary.com/practicaldev/image/fetch/s--vkDpq-L9--/c_limit%2Cf_auto%2Cfl_progressive%2Cq_auto%2Cw_880/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/9lgclky2pibn8djizbh1.png)


## What do this app do?

- Provides basic knowledge about web3
- Lists all registered cryptocurrencies and their price, marketcap etc. in a single table
- Collects and provides news on various topics related to web3 and and specialized topics
- Provides Articles, Blogs to readers.
- readers can also upload articles (building stage...)
- Mint NFTs and keeps track like SaaS 
(planning stage...)

## Tools and Frameworks used:
- [NextJS](https://nextjs.org/)
- [Appwrite](https://appwrite.io/)

## Setup local environment

- install and run docker image of appwrite to build the headless CMS ([installation guide](https://appwrite.io/docs/installation)) 

- setup CMS with APP ID and DB collections

- use these schema to setup the database: 
```
blogs:-
  blog_title:{type: String}
  blog_content:{type: String}
  image:{type: String}

about:-
  title:{type: String}
  paragraph:{type: String}
  card:[]

crypto:-
  home:{type: String}
  learn:{type: String}
  concept:{type: String}

blockchain:-
  home:{type: String}
  concept:{type: String}
  features:{type: String}
  learn:{type: String}

dao:-
  home:{type: String}
  concept:{type: String}
  features:{type: String}
``` 
add data into these collections.

- get url, project_ID, and database IDs and store into local .env file


- clone this repository in local environment
```
git clone https://github.com/8-bit-souvik/web3bie.git && cd web3bie/
```

- paste the .env file into root directory

- run command: 
  ``` 
  npm i && npm run dev
  ```
- open browser and go to 
  ```
  http://localhost:3000/
  ```
enjoy!!

## Alternatively
you can check this out here: https://web3bie.netlify.app/

## License
[Apache-2 license](https://www.apache.org/licenses/LICENSE-2.0)
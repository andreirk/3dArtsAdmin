import { AxiosResponse } from "axios";
import { ArtItem } from "~/models/ArtGalleryItem";

import api from ".";

const items = [
    {
      "id": 1,
      "imageUrl": "https://static.poly.pizza/2e6df40d-305c-4ebe-b61a-dcb2df03fb03.webp",
      "price": 50,
      "description": "some description",
      "itemOrder": 10,
      "title": "Title 1"
    },
    {
      "id": 2,
      "imageUrl": "https://static.poly.pizza/7eadddb7-782a-429a-913d-c7447a9a316b.webp",
      "price": 50,
      "description": "some description",
      "itemOrder": 20,
      "title": "Title 2"
    },
    {
      "id": 3,
      "imageUrl": "https://static.poly.pizza/8af015a7-3b49-4898-8810-1beb36e796c5.webp",
      "price": 50,
      "description": "some description",
      "itemOrder": 30,
      "title": "Title 3"
    },
    {
      "id": 4,
      "imageUrl": "https://static.poly.pizza/53a83125-e16a-4024-b8f6-1e72679c7ddf.webp",
      "price": 50,
      "description": "some description",
      "itemOrder": 40,
      "title": "Title 4"
    },
    {
      "id": 5,
      "imageUrl": "https://static.poly.pizza/listimg/sM2Tz2GBWgZwLLBqPSjZ.webp",
      "price": 50,
      "description": "some description",
      "itemOrder": 50,
      "title": "Title 5"
    },
    // {
    //   "id": 6,
    //   "imageUrl": "",
    //   "price": 50,
    //   "description": "some description",
    //   "itemOrder": 60,
    //   "title": "Title 6"
    // },
    // {
    //   "id": 7,
    //   "imageUrl": "",
    //   "price": 50,
    //   "description": "some description",
    //   "itemOrder": 70,
    //   "title": "Title 7"
    // },
    // {
    //   "id": 8,
    //   "imageUrl": "",
    //   "price": 50,
    //   "description": "some description",
    //   "itemOrder": 80,
    //   "title": "Title 8"
    // },
    // {
    //   "id": 9,
    //   "imageUrl": "",
    //   "price": 50,
    //   "description": "some description",
    //   "itemOrder": 90,
    //   "title": "Title 9"
    // },
    // {
    //   "id": 10,
    //   "imageUrl": "",
    //   "price": 50,
    //   "description": "some description",
    //   "itemOrder": 100,
    //   "title": "Title 10"
    // },
    // {
    //   "id": 11,
    //   "imageUrl": "",
    //   "price": 50,
    //   "description": "some description",
    //   "itemOrder": 110,
    //   "title": "Title 11"
    // },
    // {
    //   "id": 12,
    //   "imageUrl": "",
    //   "price": 50,
    //   "description": "some description",
    //   "itemOrder": 120,
    //   "title": "Title 12"
    // }
  ]

export default class ArtGalleryService {
    static async fetchAll(): Promise<any> {
        return Promise.resolve(items);
    } 
    static async create(): Promise<AxiosResponse<ArtItem[]>> {
        return api.get<ArtItem[]>('./users.json')
    } 
    static async update(): Promise<AxiosResponse<ArtItem[]>> {
        return api.get<ArtItem[]>('./users.json')
    } 
   
}

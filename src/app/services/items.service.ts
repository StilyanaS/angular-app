import { Injectable } from "@angular/core";

@Injectable()
export class ItemsService {
  public items: any[] = [
    {
      img: './../../assets/cerv1.png',
      title: 'Cassels Milk Stou',
      description: 'Cassels & Sons Brewing. Cerveza porter y stout',
      price: '$75.000',
      tag: 'rubia',
      id: 1
    },
    {
      img: './../../../assets/cerv2.png',
      title: 'Camba Pale Ale',
      description: 'La Souche Franc-Bois d’hiver. Cerveza pale.',
      price: '$85.300',
      tag: 'morena',
      id: 2
    },
    {
      img: './../../../assets/cerv3.png',
      title: 'Votus Nº 001',
      description: 'India Pale Ale del año 2019. Nº 001 Red IPA.',
      price: '$75.000',
      tag: 'roja',
      id: 3
    },
    {
      img: './../../../assets/cerv4.png',
      title: 'Prairie Artisian',
      description: 'Ales Prairie Noir Whiskey Barrel Aged Imperial Stout 12oz',
      price: '$85.300',
      tag: 'rubia',
      id: 4
    },
    {
      img: './../../../assets/cerv5.png',
      title: 'Lost Abbey',
      description: 'The Lost Abbey Citrus Sin American Wild Ale 750ml',
      price: '$75.000',
      tag: 'morena',
      id: 5
    },
    {
      img: './../../../assets/cerv6.png',
      title: 'Prairie',
      description: 'Prairie Artisa Ales Paradise Imperial Stout 12oz',
      price: '$85.300',
      tag: 'roja',
      id: 6
    },
    {
      img: './../../../assets/cerv7.png',
      title: 'Redrice',
      description: 'Hitachino Nest Beer Red Rice Ale 330ml',
      price: '$85.300',
      tag: 'rubia',
      id: 7
    },
    {
      img: './../../../assets/cerv8.png',
      title: 'Cascade',
      description: 'Cascade Brewing 2017 Brunch Line BA NORTHWEST Sour Ale',
      price: '$175.000',
      tag: 'morena',
      id: 8
    },
  ]
}

import { Component, OnInit, Input } from '@angular/core';
import { CardStatus } from "../../../enum/card-status";
import { Card } from "../../../model/card";
const DOWN = "DOWN";
const UP = "UP";

@Component({
  selector: 'app-placement',
  templateUrl: './placement.component.html',
  styleUrls: ['./placement.component.css']
})
export class PlacementComponent implements OnInit {

    placementClass: string;
    @Input() cardsTodo;
    @Input() cardsInProgress;
    @Input() cardsDone;
    @Input() currentCard: Card;
    @Input() placementType: string;

  constructor() { }

  ngOnInit() {
      if (this.placementType === UP) {
          this.placementClass = "empty-card-placement-up";
      } else {
          this.placementClass = "empty-card-placement-down";
      }
  }

  onDrop(e: any) {
      let item = e.dragData as Card;
      switch (this.currentCard.status) {
          case 0: {
              this.moveCard(item, CardStatus.TODO);
              break;
          }
          case 1: {
              this.moveCard(item, CardStatus.IN_PROGRESS);
              break;
          }
          case 2: {
              this.moveCard(item, CardStatus.DONE);
              break;
          }
      }
      
  }

  private moveCard(card: Card, cardStatus: CardStatus) {
      this.removeItem(card);
      card.status = cardStatus;
      switch (card.status) {
          case CardStatus.TODO: {
              let index = this.getCardPosition(this.currentCard.id, this.cardsTodo);
              if (this.placementType === UP) {
                  this.cardsTodo.splice(index, 0, card);
              } else {
                  if (this.currentCard.id !== 0) {
                      this.cardsTodo.splice(index + 1, 0, card);
                  }
                  else {
                      this.cardsTodo.splice(index, 0, card);
                  }
              }
              break;
          }
          case CardStatus.IN_PROGRESS: {
              let index = this.getCardPosition(this.currentCard.id, this.cardsInProgress);
              if (this.placementType === UP) {
                  this.cardsInProgress.splice(index, 0, card);
              } else {
                  if (this.currentCard.id !== 0) {
                      this.cardsInProgress.splice(index + 1, 0, card);
                  }
                  else {
                      this.cardsInProgress.splice(index, 0, card);
                  }
                 
              };
              break;
          }
          case CardStatus.DONE: {
              let index = this.getCardPosition(this.currentCard.id, this.cardsDone);
              if (this.placementType === UP) {
                  this.cardsDone.splice(index, 0, card);
              } else {
                  if (this.currentCard.id !== 0) {
                      this.cardsDone.splice(index + 1, 0, card);
                  }
                  else {
                      this.cardsDone.splice(index, 0, card);
                  }
              }
              break;
          }

      }
  }

  removeItem(item: Card) {
      let list: Array<any> = [];
      if (item.status === CardStatus.TODO) {
          list = this.cardsTodo;
      }
      else if (item.status === CardStatus.IN_PROGRESS) {
          list = this.cardsInProgress;
      }
      else {
          list = this.cardsDone;
      }
      let index = list.map(function (e) {
          return e.id
      }).indexOf(item.id);
      list.splice(index, 1);
  }


  private getCardPosition(cardId: number, list) {
      let i = 0;
      for (let card of list) {
          if (card.id === cardId) {
              return i;
          }
          i++;
      }
      return -1;
  }
}

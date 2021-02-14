import { Component, OnInit } from '@angular/core';
import { Card } from "../../model/card";
import { CardStatus } from "../../enum/card-status";

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  cardsTodo = [
      new Card(1, "tiltle1", "desc1", CardStatus.TODO),
      new Card(2, "tiltle2", "desc2", CardStatus.TODO),
      new Card(3, "tiltle3", "desc3", CardStatus.TODO),
      new Card(4, "tiltle4", "desc4", CardStatus.TODO),
      new Card(0, "Create new card", "", CardStatus.TODO)];

  cardsInProgress = [new Card(0, "Create new card", "", CardStatus.IN_PROGRESS)];
  cardsDone = [new Card(0, "Create new card", "", CardStatus.DONE)];

  onToDoDrop(e: any) {
      let item = e.dragData as Card;
      this.moveCard(item, CardStatus.TODO);
  }

  onInProgressDrop(e: any) {
      let item = e.dragData as Card;
      this.moveCard(item, CardStatus.IN_PROGRESS);
  }

  onDoneDrop(e: any) {
      let item = e.dragData as Card;
      this.moveCard(item, CardStatus.DONE);
  }


  private moveCard(card: Card, cardStatus: CardStatus) {
      this.removeItem(card);
      card.status = cardStatus;
      switch (card.status) {
          case CardStatus.TODO: {
              this.cardsTodo.splice(this.cardsTodo.length-1, 0, card);
              break;
          }
          case CardStatus.IN_PROGRESS: {
              this.cardsInProgress.splice(this.cardsInProgress.length - 1, 0, card);
              break;
          }
          case CardStatus.DONE: {
              this.cardsDone.splice(this.cardsDone.length - 1, 0, card);
              break;
          }

      }
  }

   removeItem(item: Card) {
      let list: Array<any> = [];
      if (item.status === CardStatus.TODO)
      {
          list = this.cardsTodo;
      }
      else if (item.status === CardStatus.IN_PROGRESS)
      {
          list = this.cardsInProgress;
      }
      else
      {
          list = this.cardsDone;
      }
      let index = list.map(function (e) {
          return e.id
      }).indexOf(item.id);
      list.splice(index, 1);
  }
}

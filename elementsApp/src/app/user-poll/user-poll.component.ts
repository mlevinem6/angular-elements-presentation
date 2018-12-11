import { Input, Output, EventEmitter, Component, OnInit, ViewEncapsulation } from '@angular/core';
import { AngularFirestoreDocument, AngularFirestore } from 'angularfire2/firestore';
import { tap } from 'rxjs/operators';

@Component({
  selector: 'app-user-poll',
  templateUrl: './user-poll.component.html',
  styleUrls: ['./user-poll.component.scss'],
  encapsulation: ViewEncapsulation.ShadowDom   // <-- This is the only thing different from regular components
})
export class UserPollComponent implements OnInit {
  @Input()
  pollQuestion = "Do you like default questions?";

  @Output()
  voted = new EventEmitter<string>();

  yes: number;
  no: number;
  hasVoted = false;
  pollRef: AngularFirestoreDocument<any>;

  constructor(private afs: AngularFirestore) { 
    afs.firestore.settings({ timestampsInSnapshots: true });
  }

  ngOnInit() {
    this.pollRef = this.afs.doc('polls/elements');

    this.pollRef.valueChanges().pipe(
      tap(doc => {
        this.yes = doc.yes || 0;
        this.no = doc.no || 0;
      })
    )
    .subscribe();
  }

  vote(val: string) {
    this.hasVoted = true;
    this.pollRef.update({ [val]: this[val] + 1 });

    this.voted.emit(val);
  }

  get yesPercent() {
    return (this.yes / (this.yes + this.no)) * 100;
  }

  get noPercent() {
    return (this.no / (this.yes + this.no)) * 100;
  }
}

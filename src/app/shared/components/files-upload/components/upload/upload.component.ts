import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { AngularFireStorage, AngularFireUploadTask } from '@angular/fire/compat/storage';
import { finalize, lastValueFrom, Observable, Subject, takeUntil } from 'rxjs';
import firebase from 'firebase/compat';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
  styleUrls: ['./upload.component.scss']
})
export class UploadComponent implements OnInit, OnDestroy {
  @Input() file: File;

  @Output() completed = new EventEmitter<string>();

  task: AngularFireUploadTask;
  percentage$: Observable<number>;
  snapshot$: Observable<firebase.storage.UploadTaskSnapshot>;
  downloadUrl: string;

  private destroy$ = new Subject<boolean>();

  constructor(private storage: AngularFireStorage) {
  }

  ngOnInit(): void {
    this.startUpload();
  }

  ngOnDestroy(): void {
    this.destroy$.next(true);
    this.destroy$.complete();
  }

  private startUpload(): void {
    const path = `${this.file.type.split('/')[0]}/${Date.now()}/${this.file.name}`;
    const storageRef = this.storage.ref(path);
    this.task = this.storage.upload(path, this.file);

    this.percentage$ = this.task.percentageChanges();
    this.snapshot$ = this.task.snapshotChanges();

    this.snapshot$.pipe(takeUntil(this.destroy$), finalize(async()=>{
      this.downloadUrl = await lastValueFrom(storageRef.getDownloadURL());
      this.completed.next(this.downloadUrl);
    })).subscribe()

  }

}

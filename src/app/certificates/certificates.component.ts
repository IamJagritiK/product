// import { Component, OnInit } from '@angular/core';
//
// @Component({
//   selector: 'app-certificates',
//   templateUrl: './certificates.component.html',
//   styleUrls: ['./certificates.component.scss']
// })
// export class CertificatesComponent implements OnInit {
//
//   constructor() { }
//
//   ngOnInit() {
//   }
//
// }
import { Component, OnInit } from '@angular/core';
import { CertificateService } from '../shared/certificate.service';

@Component({
  selector: 'app-certificates',
  templateUrl: './certificates.component.html',
  styleUrls: ['./certificates.component.scss']
})
export class CertificatesComponent implements OnInit {

  constructor(private service: CertificateService) { }

  ngOnInit() {
    this.service.getCertificateDetailList();
  }

}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss'],
})
export class ClientComponent implements OnInit {
  articulos: any = null;
  baseUrl: string = 'http://scratchya.com.ar/vue/datos.php';
  constructor(private http: HttpClient) {}

  ngOnInit(): void {
    this.http.get(this.baseUrl).subscribe({
      next: (data) => {
        this.articulos = data;
        console.log(data);
      },
      error: (e) => console.error(e),
      complete: () => console.info('complete'),
    });
  }
}

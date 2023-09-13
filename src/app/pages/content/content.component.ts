import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit{
  @Input()
  photoCover:string = "https://img.band.uol.com.br/image/2023/09/10/corinthians-conquistou-o-penta-no-brasileirao-feminino-183449.jpg"
  @Input()
  contentTitle:string = "Teste"
  @Input()
  contentDescription:string = "corinthians"

  constructor(){}

  ngOnInit(): void {
      
  }
}

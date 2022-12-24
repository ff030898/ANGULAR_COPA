import { moveItemInArray } from '@angular/cdk/drag-drop';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Team } from '../models/Team';

@Component({
  selector: 'app-groups',
  templateUrl: './groups.component.html',
  styleUrls: ['./groups.component.scss']
})
export class GroupsComponent implements OnInit {

  @Output()
  moveTeam = new EventEmitter<any>();

  @Input()
  groups!: Team[][];

  ngOnInit(): void {
    this.initGroup();
  }


  initGroup() {
    this.groups = [
      [
        {
          name: "Holanda",
          img: "assets/teams/Holanda.svg"
        },
        {
          name: "Senegal",
          img: "assets/teams/Senegal.svg"
        },
        {
          name: "Equador",
          img: "assets/teams/Equador.svg"
        },
        {
          name: "Catar",
          img: "assets/teams/Catar.svg"
        },
      ],
      [
        {
          name: "Inglaterra",
          img: "assets/teams/Inglaterra.svg"
        },
        {
          name: "Estados Unidos",
          img: "assets/teams/Estados_Unidos.svg"
        },
        {
          name: "Irã",
          img: "assets/teams/Irã.svg"
        },
        {
          name: "País de Gales",
          img: "assets/teams/País_de_Gales.svg"
        },
      ],

      [
        {
          name: "Argentina",
          img: "assets/teams/Argentina.svg"
        },
        {
          name: "Polônia",
          img: "assets/teams/Polonia.svg"
        },
        {
          name: "México",
          img: "assets/teams/México.svg"
        },
        {
          name: "Arábia Saudita",
          img: "assets/teams/Arábia_Saudita.svg"
        },
      ],

      [
        {
          name: "França",
          img: "assets/teams/França.svg"
        },
        {
          name: "Austrália",
          img: "assets/teams/Australia.svg"
        },

        {
          name: "Tunísia",
          img: "assets/teams/Tunisia.svg"
        },

        {
          name: "Dinamarca",
          img: "assets/teams/Dinamarca.svg"
        },
      ],

      [
        {
          name: "Japão",
          img: "assets/teams/Japao.svg"
        },
        {
          name: "Espanha",
          img: "assets/teams/Espanha.svg"
        },

        {
          name: "Alemanha",
          img: "assets/teams/Alemanha.svg"
        },

        {
          name: "Costa Rica",
          img: "assets/teams/Costa_Rica.svg"
        },
      ],

      [
        {
          name: "Marrocos",
          img: "assets/teams/Marrocos.svg"
        },
        {
          name: "Croácia",
          img: "assets/teams/Croácia.svg"
        },

        {
          name: "Bélgica",
          img: "assets/teams/Bélgica.svg"
        },

        {
          name: "Canadá",
          img: "assets/teams/Canadá.svg"
        },
      ],

      [
        {
          name: "Brasil",
          img: "assets/teams/Brasil.svg"
        },
        {
          name: "Suíça",
          img: "assets/teams/Suíça.svg"
        },

        {
          name: "Camarões",
          img: "assets/teams/Camarões.svg"
        },

        {
          name: "Sérvia",
          img: "assets/teams/Servia.svg"
        },
      ],

      [
        {
          name: "Portugal",
          img: "assets/teams/Portugal.svg"
        },
        {
          name: "Coreia do Sul",
          img: "assets/teams/Coreia_do_Sul.svg"
        },

        {
          name: "Uruguai",
          img: "assets/teams/Uruguai.svg"
        },

        {
          name: "Gana",
          img: "assets/teams/Gana.svg"
        },
      ]
    ];

  }

  drop(event: any, index: number) {
    moveItemInArray(this.groups[index], event.previousIndex, event.currentIndex)
    this.moveTeam.emit(this.groups)
  }
}

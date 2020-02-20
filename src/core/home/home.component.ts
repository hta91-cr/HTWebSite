import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { MainService } from "../../services/main.service";
import { Visit } from "../../Models/visit";
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor(private http: HttpClient, private service: MainService) {}

  myStyle: object = {};
  myParams: object = {};
  width: number = 100;
  height: number = 100;

  ngOnInit() {
    this.myStyle = {
      position: "absolute",
      width: "100%",
      height: "100%",
      "z-index": 1,
      top: 0,
      left: 0,
      right: 0,
      bottom: 0
    };

    this.myParams = {
      fps_limit: 28,
      particles: {
        number: {
          value: 150,
          density: {
            enable: false
          }
        },
        line_linked: {
          enable: true,
          distance: 30,
          opacity: 0.4
        },
        move: {
          speed: 1
        },
        opacity: {
          anim: {
            enable: true,
            opacity_min: 0.05,
            speed: 2,
            sync: false
          },
          value: 0.4
        }
      },
      polygon: {
        enable: true,
        scale: 0.5,
        type: "inline",
        move: {
          radius: 10
        },
        url: "/small-deer.2a0425af.svg",
        inline: {
          arrangement: "equidistant"
        },
        draw: {
          enable: true,
          stroke: {
            color: "rgba(255, 255, 255, .2)"
          }
        }
      },
      retina_detect: false,
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: "bubble"
          }
        },
        modes: {
          bubble: {
            size: 6,
            distance: 40
          }
        }
      }
    };

    this.http
      .get('https://www.iplocate.io/api/lookup')
      .subscribe((res: any) => {
        const visit: Visit = {
          ip: res.ip,
          country: res.country
        };
        this.service.addItem(visit);
      });
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularDemo';
  cards=[
    {
      title:"Free",
      price:"$0",
      duration:"/month",
      features:[
        {
          feature:"Single User",
          enable:true,
          bold:true
        },
        {
          feature:"5GB Storage",
          enable:true,
          bold:false
        },
        {
          feature:"Unlimited Public Projects",
          enable:true,
          bold:false
        },
        {
          feature:"Community Access",
          enable:true,
          bold:false
        },
        {
          feature:"Unlimited Private Projects",
          enable:false,
          bold:false
        },
        {
          feature:"Dedicated Phone Support",
          enable:false,
          bold:false
        },
        {
          feature:"Free Subdomain",
          enable:false,
          bold:false
        },
        {
          feature:"Monthly Status Reports",
          enable:false,
          bold:false
        }
      ]
    },
    {
      title:"Plus",
      price:"$9",
      duration:"/month",
      features:[
        {
          feature:"5 Users",
          enable:true,
          bold:true
        },
        {
          feature:"50GB Storage",
          enable:true,
          bold:false
        },
        {
          feature:"Unlimited Public Projects",
          enable:true,
          bold:false
        },
        {
          feature:"Community Access",
          enable:true,
          bold:false
        },
        {
          feature:"Unlimited Private Projects",
          enable:true,
          bold:false
        },
        {
          feature:"Dedicated Phone Support",
          enable:true,
          bold:false
        },
        {
          feature:"Free Subdomain",
          enable:true,
          bold:false
        },
        {
          feature:"Monthly Status Reports",
          enable:false,
          bold:false
        }
      ]
    },
    {
      title:"Pro",
      price:"$49",
      duration:"/month",
      features:[
        {
          feature:"Unlimited Users",
          enable:true,
          bold:true
        },
        {
          feature:"150GB Storage",
          enable:true,
          bold:false
        },
        {
          feature:"Unlimited Public Projects",
          enable:true,
          bold:false
        },
        {
          feature:"Community Access",
          enable:true,
          bold:false
        },
        {
          feature:"Unlimited Private Projects",
          enable:true,
          bold:false
        },
        {
          feature:"Dedicated Phone Support",
          enable:true,
          bold:false
        },
        {
          feature:"Unlimited Free Subdomain",
          enable:true,
          bold:true
        },
        {
          feature:"Monthly Status Reports",
          enable:true,
          bold:false
        }
      ]
    }
  ]

}

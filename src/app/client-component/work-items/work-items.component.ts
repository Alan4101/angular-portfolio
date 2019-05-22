import { Component, OnInit} from '@angular/core';
import { FirebaseService } from "../../admin-component/firebase.service";

@Component({
  selector: 'app-work-items',
  templateUrl: './work-items.component.html',
  styleUrls: ['./work-items.component.css'],
})
export class WorkItemsComponent implements OnInit {

  constructor(private fs: FirebaseService) { }

  worksItem = [];
  colorItems = [];
  ngOnInit() {
    this.fs.getWorks().subscribe(list=>{
      this.worksItem = list.map(item=>{
        return{
          $key: item.key,
            ...item.payload.val()
        }
      })
    })

  }

  color: any;

  getAverageRGB(imgEl) {

        let blockSize = 5, // only visit every 5 pixels
            defaultRGB = {r:0,g:0,b:0}, // for non-supporting envs
            canvas = document.createElement('canvas'),
            context = canvas.getContext && canvas.getContext('2d'),
            data, width, height,
            i = -4,
            length,
            rgb = {r:0,g:0,b:0},
            count = 0;

        if (!context) {
            return defaultRGB;
        }

        height = canvas.height = imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
        width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

        context.drawImage(imgEl, 0, 0);

        try {
            data = context.getImageData(0, 0, width, height);
        } catch(e) {
            /* security error, img on diff domain */alert('x');
            return defaultRGB;
        }

        length = data.data.length;

        while ( (i += blockSize * 4) < length ) {
            ++count;
            rgb.r += data.data[i];
            rgb.g += data.data[i+1];
            rgb.b += data.data[i+2];
        }

        // ~~ used to floor values
        rgb.r = ~~(rgb.r/count);
        rgb.g = ~~(rgb.g/count);
        rgb.b = ~~(rgb.b/count);

        return rgb;

    }
  getColor(event: any){
      const ev = event.target;
      const host = this.getAverageRGB(ev);
      this.colorItems.push(this.color = `rgba(${host.r}, ${host.g}, ${host.b}, .8)`);

      console.log(this.colorItems);
  }




}

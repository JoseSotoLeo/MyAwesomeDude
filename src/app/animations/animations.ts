declare var anime: any;  


import {
    trigger,
    animate,
    transition,
    style,
    query,
    state,
    
} from '@angular/animations';

export const fadeAnimation = trigger('fadeAnimation', [
    transition('* => *', [
        query(':enter', [style({opacity: 0})], {optional: true}),
        query(':leave', [style({ opacity: 1 }), animate('0.3s 6s', style({ opacity: 0 }))], {optional: true}),
        query(':enter', [style({ opacity: 0 }), animate('0.3s 6s', style({ opacity: 1}))], { optional: true})
    ])
]);

export const fadeInAnimation = trigger('fadeInAnimation', [
    transition(":enter", [
        style({ opacity: 0 }),
        animate('0.5s 0.5s', style({ opacity: 1 }))
        ]),

]);


export class WelcomeAnimation {

    public welcomeAnimation(){
        anime.timeline({loop: false})
      .add({
        targets: '.an-1 .letter',
        scale: [4,1],
        opacity: [0,1],
        translateZ: 0,
        easing: "easeOutExpo",
        duration: 950,
        delay: (el, i) => 70*i
      })
      .add({
        targets: '.an-1',
        opacity: 0,
        duration: 1000,
        easing: "easeOutExpo",
        delay: 500
      })
      .add({
        targets: '.an-1',
        hidden: 1,
        padding: 0
      });
    }
}
import {
  trigger,
  transition,
  style,
  query,
  animateChild,
  group,
  animate
} from "@angular/animations";
export const slideLeft = [
  query(
    ":leave",
    style({
      position: "absolute",
      left: 0,
      right: 0,
      transform: "translate3d(0%,0,0)"
    })
  ),
  query(
    ":enter",
    style({
      position: "absolute",
      left: 0,
      right: 0,
      transform: "translate3d(-100%,0,0)"
    })
  ),
  group([
    query(
      ":leave",
      animate("1s", style({ transform: "translate3d(100%,0,0)" }))
    ),
    query(":enter", animate("1s", style({ transform: "translate3d(0%,0,0)" })))
  ])
];

export const slideRight = [
  query(
    ":leave",
    style({
      position: "absolute",
      left: 0,
      right: 0,
      transform: "translate3d(0%,0,0)"
    })
  ),
  query(
    ":enter",
    style({
      position: "absolute",
      left: 0,
      right: 0,
      transform: "translate3d(100%,0,0)"
    })
  ),

  group([
    query(
      ":leave",
      animate("1s", style({ transform: "translate3d(-100%,0,0)" }))
    ),
    query(":enter", animate("1s", style({ transform: "translate3d(0%,0,0)" })))
  ])
];
export const slideInAnimation = trigger("routeAnimations", [
  transition("* <=> 4", [
    style({ position: "relative" }),
    query(":enter, :leave", [
      style({
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%"
      })
    ]),
    query(":enter", [style({ top: "-100vh" })]),
    query(":leave", animateChild()),
    group([
      query(":leave", [animate("300ms ease-out", style({ top: "100vh" }))]),
      query(":enter", [animate("300ms ease-out", style({ top: "0" }))])
    ]),
    query(":enter", animateChild())
  ])
]);

export const fadin = trigger("fadeAnimations", [
  transition("* <=> *", [
    /* order */

    /* 1 */ query(
      ":enter, :leave",
      style({ position: "fixed", width: "100%", opacity: 0 }),

      { optional: true }
    ),

    /* 2 */ group([
      // block executes in parallel

      query(
        ":enter",
        [
          style({ transform: "translateY(-100%) scale(0)", opacity: 0 }),

          animate(
            "0.6s ease-in-out",
            style({ transform: "translateY(0%) scale(1)", opacity: 1 })
          )
        ],
        { optional: true }
      ),

      query(
        ":leave",
        [
          style({ transform: "translateY(0%) scale(1)", opacity: 1 }),

          animate(
            "0.6s ease-in-out",
            style({ transform: "translateY(100%) scale(0)", opacity: 0 })
          )
        ],
        { optional: true }
      )
    ])
  ])
]);

# Frontend Mentor - Huddle landing page with alternating feature blocks solution

This is a solution to the [Huddle landing page with alternating feature blocks challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/huddle-landing-page-with-alternating-feature-blocks-5ca5f5981e82137ec91a5100). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 




### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

(https://prnt.sc/UyN9b3tdSGOS)



### Links

- Solution URL: [https://github.com/bap-ssbm/huddle_landing_page]
- Live Site URL: [https://bap-ssbm.github.io/huddle_landing_page/]

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

-framer-motion

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

I learned quite alot about framer motion, useInview, useScroll functions. as well as the prop, whileInView.
Also learned how to manipulate svgs, which were pretty difficult to do.

```html
 <motion.div ref={ref} style={{translateX : isInView ? 0 : 1, zIndex: 1}} className="middle-section">
            <Card cardisInView={cardisInView} cardData={cardData[0]} type="left" />
            <Card cardisInView={cardisInView}  cardData={cardData[1]} type="right" />
            <Card cardisInView={cardisInView}  cardData={cardData[2]} type="left" />
            <motion.div className="build-community-card" initial={{ y: 200, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} transition={{ delay: 0.3, duration: 0.8 }}>
                <h1>
                    Ready To Build Your Community?
                </h1>
                <motion.button whileHover={{
                    opacity: 0.4
                }}>
                    Get Started For Free
                </motion.button>
            </motion.div>

        </motion.div>
    )
```

i was pretty proud of this card component i made with react, just specifiying which type of card it was and then just stylizing it based on the info i put into the component.
```css
.icon-circle{
    border: 1px white solid;
    height: 30px;
    width: 30px;
    display: flex;
    place-items: center;
    justify-content: center;
    border-radius: 50%;
    margin-right: 15px;
    cursor: pointer;
}
```
the icon circle i made was pretty cool
```js
  const { scrollYProgress } = useScroll();
    let y = useTransform(scrollYProgress, [0, 1], ["0vh", "-100vh"]);
    let opacity = useTransform(scrollYProgress, [0, .3], [1, 0]);

```
  i literally just learned how to use this function useScrol and useTransform, but i got the hang of it from this project! Im proud of this one. i just read the documentation on framer's website




### Continued development
perfecting this scroll animation, and other animatiosn in the future with framer-motion. It adds a little extra to the way the page looks, and its pretty awesome


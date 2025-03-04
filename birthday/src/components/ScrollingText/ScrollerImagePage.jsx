import React from "react";
// import "./scroller.css";
import "./scrl.scss";

import pic1 from "../../assets/kid her/1.jpg";
import pic2 from "../../assets/kid her/2.jpg";
import pic3 from "../../assets/kid her/3.jpg";
import pic4 from "../../assets/kid her/4.jpg";
import pic5 from "../../assets/kid her/5.jpg";
import pic6 from "../../assets/kid her/6.jpg";
import pic7 from "../../assets/kid her/7.jpg";
import pic8 from "../../assets/kid her/8.jpg";
import pic9 from "../../assets/kid her/9.jpg";
import pic10 from "../../assets/kid her/10.jpg";
import pic11 from "../../assets/kid her/11.jpg";
import pic12 from "../../assets/kid her/12.jpg";

const ScrollerImagePage = () => {
  return (
    <div className="SIP">
      <div className="block-center-center">
        <main className="inline content-full">
          <section className="Hero inline gap-2">
            <div className="Wrapper block content-3">
              <div className="Visual block-center-center">
                <picture className="FirstPic">
                  <source
                    srcSet={pic12}
                    media="(width >= 1024px)"
                    type="image/avif"
                  />
                  <source srcSet={pic12} type="image/avif" />
                  <source
                    srcSet={pic12}
                    media="(width >= 1024px)"
                    type="image/webp"
                  />
                  <img src={pic12} alt="Stories Unveiled" />
                </picture>

                <picture className="SecondPic">
                  <source
                    srcSet={pic11}
                    media="(width >= 1024px)"
                    type="image/avif"
                  />
                  <source srcSet={pic11} type="image/avif" />
                  <source
                    srcSet={pic11}
                    media="(width >= 1024px)"
                    type="image/webp"
                  />
                  <img src={pic11} alt="Celebrating Life Together" />
                </picture>

                <picture className="ThirdPic">
                  <source
                    srcSet={pic10}
                    media="(width >= 1024px)"
                    type="image/avif"
                  />
                  <source srcSet={pic10} type="image/avif" />
                  <source
                    srcSet={pic10}
                    media="(width >= 1024px)"
                    type="image/webp"
                  />
                  <img src={pic10} alt="The Art of Giving" />
                </picture>

                {/* experimentation with fourth pic  */}

                <picture className="FourthPic">
                  <source
                    srcSet={pic9}
                    media="(width >= 1024px)"
                    type="image/avif"
                  />
                  <source srcSet={pic9} type="image/avif" />
                  <source
                    srcSet={pic9}
                    media="(width >= 1024px)"
                    type="image/webp"
                  />
                  <img src={pic9} alt="Celebrating Life Together" />
                </picture>

                <picture className="FifthPic">
                  <source
                    srcSet={pic8}
                    media="(width >= 1024px)"
                    type="image/avif"
                  />
                  <source srcSet={pic8} type="image/avif" />
                  <source
                    srcSet={pic8}
                    media="(width >= 1024px)"
                    type="image/webp"
                  />
                  <img src={pic8} alt="Celebrating Life Together" />
                </picture>

                <picture className="SixthPic">
                  <source
                    srcSet={pic7}
                    media="(width >= 1024px)"
                    type="image/avif"
                  />
                  <source srcSet={pic7} type="image/avif" />
                  <source
                    srcSet={pic7}
                    media="(width >= 1024px)"
                    type="image/webp"
                  />
                  <img src={pic7} alt="Celebrating Life Together" />
                </picture>

                <picture className="SeventhPic">
                  <source
                    srcSet={pic6}
                    media="(width >= 1024px)"
                    type="image/avif"
                  />
                  <source srcSet={pic6} type="image/avif" />
                  <source
                    srcSet={pic6}
                    media="(width >= 1024px)"
                    type="image/webp"
                  />
                  <img src={pic6} alt="Celebrating Life Together" />
                </picture>

                <picture className="EighthPic">
                  <source
                    srcSet={pic5}
                    media="(width >= 1024px)"
                    type="image/avif"
                  />
                  <source srcSet={pic5} type="image/avif" />
                  <source
                    srcSet={pic5}
                    media="(width >= 1024px)"
                    type="image/webp"
                  />
                  <img src={pic5} alt="Celebrating Life Together" />
                </picture>

                <picture className="NinethPic">
                  <source
                    srcSet={pic4}
                    media="(width >= 1024px)"
                    type="image/avif"
                  />
                  <source srcSet={pic4} type="image/avif" />
                  <source
                    srcSet={pic4}
                    media="(width >= 1024px)"
                    type="image/webp"
                  />
                  <img src={pic4} alt="Celebrating Life Together" />
                </picture>

                <picture className="TenthPic">
                  <source
                    srcSet={pic3}
                    media="(width >= 1024px)"
                    type="image/avif"
                  />
                  <source srcSet={pic3} type="image/avif" />
                  <source
                    srcSet={pic3}
                    media="(width >= 1024px)"
                    type="image/webp"
                  />
                  <img src={pic3} alt="Celebrating Life Together" />
                </picture>

                <picture className="EleventhPic">
                  <source
                    srcSet={pic2}
                    media="(width >= 1024px)"
                    type="image/avif"
                  />
                  <source srcSet={pic2} type="image/avif" />
                  <source
                    srcSet={pic2}
                    media="(width >= 1024px)"
                    type="image/webp"
                  />
                  <img src={pic2} alt="Celebrating Life Together" />
                </picture>

                <picture className="TwelvethPic">
                  <source
                    srcSet={pic1}
                    media="(width >= 1024px)"
                    type="image/avif"
                  />
                  <source srcSet={pic1} type="image/avif" />
                  <source
                    srcSet={pic1}
                    media="(width >= 1024px)"
                    type="image/webp"
                  />
                  <img src={pic1} alt="Celebrating Life Together" />
                </picture>
              </div>
            </div>

            <div className="Content block">
              <div id="Genesis" className="FirstLockup block-center-start">
                <div className="block gap-3">
                  <h3>Genesis</h3>
                  <div className="subhead">
                    A luminous soul embarked on its earthly odyssey,
                  </div>
                  <p>
                    tiny fingers reaching toward infinite horizons where
                    destiny's constellations twinkled with promise.
                  </p>
                </div>
              </div>
              <div
                id="Behold"
                className="SecondLockup block-center-start"
              >
                <div className="block gap-3">
                  <h3>Behold !</h3>
                  <div className="subhead">
                    The world's sweetest chocolate has arrived!
                  </div>
                  <p>shining with innocence and endless wonder.</p>
                </div>
              </div>
              <div
                id="CutestTroublemaker"
                className="ThirdLockup block-center-start"
              >
                <div className="block gap-3">
                  <h3>Cutest Troublemaker</h3>
                  <div className="subhead">
                    With Curious hands and endless questions,
                  </div>
                  <p>
                    A tiny bud of joy, opening her petals to a world full of
                    wonder
                  </p>
                </div>
              </div>
              {/* experimentation with fourth pic  */}

              <div
                id="Wanderlust"
                className="FourthLockup block-center-start"
              >
                <div className="block gap-3">
                  <h3>Wanderlust</h3>
                  <div className="subhead">Nomadic spirit</div>
                  <p>
                    already yearning beyond boundaries, a soul inscribed with
                    ancient maps leading to undiscovered treasures.
                  </p>
                </div>
              </div>

              <div
                id="Ethereal"
                className="FifthLockup block-center-start"
              >
                <div className="block gap-3">
                  <h3>Ethereal</h3>
                  <div className="subhead">Weaving invisible threads</div>
                  <p>
                    between kindred spirits, creating a tapestry of connection
                    that transcends time and circumstance.
                  </p>
                </div>
              </div>

              <div
                id="Luminescense"
                className="SixthLockup block-center-start"
              >
                <div className="block gap-3">
                  <h3>Luminescense</h3>
                  <div className="subhead">
                    Intellect gleamed with phosphorescent brilliance,
                  </div>
                  <p>
                    thoughts like fireflies illuminating the darkness with
                    momentary yet eternal light.
                  </p>
                </div>
              </div>

              <div id="ARTISTRY" className="SeventhLockup block-center-start">
                <div className="block gap-3">
                  <h3>Artistry</h3>
                  <div className="subhead">
                    Nimble fingers weaving ephemeral beauty
                  </div>
                  <p>
                    into tangible creation, each stitch a meditation, each
                    pattern a prayer.
                  </p>
                </div>
              </div>

              <div id="SWEETNESS" className="EighthLockup block-center-start">
                <div className="block gap-3">
                  <h3>Sweetness</h3>
                  <div className="subhead">Chocolate-smeared smiles</div>
                  <p>coupled with an unbounded spirit.</p>
                </div>
              </div>

              <div id="GLOW" className="NinethLockup block-center-start">
                <div className="block gap-3">
                  <h3>One Irreplaceable Glow</h3>
                  <div className="subhead">
                    Eyes that sparkle like stolen candy,     

{/* can be changed */}

                  </div>
                  <p> a heart as soft as a
                  teddy.</p>
                </div>
              </div>

              <div
                id="Cynophile"
                className="TenthLockup block-center-start"
              >
                <div className="block gap-3">
                  <h3>Cynophile</h3>
                  <div className="subhead">
                    With a unwavering devotion of your furry companions,
                  </div>
                  <p>connecting souls through wordless language.</p>
                </div>
              </div>

              <div
                id="Wayfarer"
                className="EleventhLockup block-center-start"
              >
                <div className="block gap-3">
                  <h3>Wayfarer</h3>
                  <div className="subhead">
                  Collecting sunsets like others collect souvenirs,
                  </div>
                  <p>holding galaxies of memories from paths traversed.</p>
                </div>
              </div>

              <div
                id="look"
                className="TwelvethLockup block-center-start"
              >
                <div className="block gap-3">
                  <h3>That Look</h3>
                  <div className="subhead">
                  That One Look .....
                  </div>
                  <p>Aise na mujhe tum dekho ... 👀</p>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default ScrollerImagePage;

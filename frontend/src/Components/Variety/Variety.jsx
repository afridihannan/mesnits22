import React from "react";
import "./styles.css";
function Variety() {
    return (
        <div className="variety">
            <div className="variety_nd">
                <div className="variety_content">
                    <div className="variety_head">Variety Podcast</div>
                    <div className="variety_para">
                        <p> The MES organises the Variety Podcast, inviting one guest every month from various domains related to mechanical engineering to talk about their respective fields and give the students an insight into the careers available after B.Tech in mechanical engineering. Our guests include alumni, reputed and eminent personalities, professors and of course, engineers. The Variety Podcast is an exciting venture, for it aims to help us understand and learn about the current requirements of the industry, skills that ought to be learnt, real-life experiences of our guests and most importantly, give us expert guidance that is very difficult to come across.</p>
                    </div>
                </div>
                <div className="variety_content" id="links">
                    <div className="variety_head">Latest videos</div>

                    <script src="https://apis.google.com/js/platform.js"></script>

                    <div className="g-ytsubscribe" data-channelid="UCCYz8Kj2rIoNUxO0BnyS8XA" data-layout="default" data-theme="dark" data-count="default"></div>

                    <iframe id="links" width="450" height="215" src="https://www.youtube.com/embed/videoseries?list=PLJ8cMiYb3G5eFOtMi4Ox74bj2hhmL-hdc" title="YouTube video player" frameborder="10" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    );
}

export default Variety;

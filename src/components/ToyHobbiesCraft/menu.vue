<template>
  <div>
    <div class="toyhobbiescraft mdl-layout mdl-js-layout has-drawer is-upgraded">
      <main class="mdl-layout__content">

        <div class="toyhobbiescraft__posts mdl-grid">

          <div class="mdl-card coffee-pic mdl-cell mdl-cell--4-col">

            <div class="mdl-card__media mdl-color-text--grey-50">
              <h3>My Fandangles</h3>
            </div>

            <div class="mdl-card__supporting-text meta mdl-color-text--grey-600">
              <div>
                <span>What Do we have to tell potential customers?</span>
              </div>
            </div>

            <div class="mdl-card__actions mdl-card--border">
              <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                View Offers
              </a>
              <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                Visit Website
              </a>
            </div>
          </div>

          <div class="mdl-card coffee-pic mdl-cell mdl-cell--4-col">
              <div class="mdl-card__media mdl-color-text--grey-50">
                <h3>Silk and Satin</h3>
              </div>
              <div class="mdl-card__supporting-text meta mdl-color-text--grey-600">
                <div>
                  <span>What Do we have to tell potential customers?</span>
                </div>
              </div>
              <div class="mdl-card__actions mdl-card--border">
                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                  View Offers
                </a>
                <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                  Visit Website
                </a>
              </div>
            </div>

        </div>

      </main>
      <div class="mdl-layout__obfuscator"></div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'ToyHobbiesCraft',
  data () {
    return {
      msg: ''
    }
  }
}
</script>

<style>
body::before {
    background-size: cover;
    background-attachment: fixed;
    content: '';
    will-change: transform;
    z-index: -1;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    position: fixed;
}
@media (max-width: 512px)  and (-webkit-min-device-pixel-ratio: 1.5),
       (max-width: 512px)  and (min-resolution: 1.5dppx),
       (max-width: 1024px) and (-webkit-max-device-pixel-ratio: 1.5),
       (max-width: 1024px) and (max-resolution: 1.5dppx) {
  body::before {
    background-image: url('../../images/bg_1024.jpg');
  }
}
@media (min-width: 513px)  and (max-width: 1024px) and (-webkit-min-device-pixel-ratio: 1.5),
       (min-width: 513px)  and (max-width: 1024px) and (min-resolution: 1.5dppx),
       (min-width: 1025px) and (max-width: 2048px) and (-webkit-max-device-pixel-ratio: 1.5),
       (min-width: 1025px) and (max-width: 2048px) and (max-resolution: 1.5dppx)  {
  body::before {
    background-image: url('../../images/bg_2048.jpg');
  }
}
@media (min-width: 1025px) and (-webkit-min-device-pixel-ratio: 1.5),
       (min-width: 1025px) and (min-resolution: 1.5dppx),
       (min-width: 2049px) and (-webkit-max-device-pixel-ratio: 1.5),
       (min-width: 2049px) and (max-resolution: 1.5dppx) {
  body::before {
    background-image: url('../../images/bg_2880.jpg');
  }
}
body .toyhobbiescraft {
  font-family: 'Roboto', 'Helvetica', sans-serif;
}

.toyhobbiescraft .mdl-layout .mdl-layout__content {
  padding-top: 230px;
  position: relative;
  -webkit-overflow-scrolling: touch;
}
.toyhobbiescraft .mdl-card {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-align-items: stretch;
      -ms-flex-align: stretch;
          align-items: stretch;
  min-height: 360px;
}
.toyhobbiescraft .mdl-card__title {
  padding: 16px;
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
}
.toyhobbiescraft .mdl-card__media {
  box-sizing: border-box;
  background-size: cover;
  padding: 24px;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
  -webkit-flex-direction: row;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-align-items: flex-end;
      -ms-flex-align: end;
          align-items: flex-end;
  cursor: pointer;
}
.toyhobbiescraft .mdl-card__media a,
.toyhobbiescraft .mdl-card__title a {
  color: inherit;
}
.toyhobbiescraft .mdl-card__supporting-text {
  width: 100%;
  padding: 16px;
  min-height: 64px;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
}
.toyhobbiescraft .mdl-card__supporting-text strong {
  font-weight: 400;
}
.toyhobbiescraft .mdl-card__media ~ .mdl-card__supporting-text {
  min-height: 64px;
}
.toyhobbiescraft .mdl-card__supporting-text:not(:last-child) {
  box-sizing: border-box;
  min-height: 76px;
}
.toyhobbiescraft:not(.toyhobbiescraft--blogpost) .mdl-card__supporting-text ~ .mdl-card__supporting-text {
  border-top: 1px solid rgba(0,0,0,0.1);
}
.toyhobbiescraft .mdl-card__actions:first-child {
  margin-left: 0;
}
.toyhobbiescraft .meta {
  box-sizing: border-box;
  padding: 16px;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: row;
      -ms-flex-direction: row;
          flex-direction: row;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  -webkit-justify-content: flex-start;
      -ms-flex-pack: start;
          justify-content: flex-start;
  height: auto;
}
.toyhobbiescraft .meta > .meta__favorites{
  -webkit-flex-direction: row;
      -ms-flex-direction: row;
          flex-direction: row;
  margin: 0 8px;
  font-size: 13px;
  font-weight: 500;
}
.toyhobbiescraft .meta > .meta__favorites .material-icons {
  font-size: 2em;
  cursor: pointer;
  margin-left: 12px;
}
.toyhobbiescraft .mdl-card .meta.meta--fill {
  -webkit-justify-content: space-between;
      -ms-flex-pack: justify;
          justify-content: space-between;
}
.toyhobbiescraft .meta > *:first-child {
  margin-right: 16px;
}
.toyhobbiescraft .meta > * {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
}
.toyhobbiescraft .coffee-pic .mdl-card__media {
  background-image: url('../../images/coffee.jpg');
}
.toyhobbiescraft .something-else .mdl-card__media {
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
  -webkit-justify-content: center;
      -ms-flex-pack: center;
          justify-content: center;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
}
.toyhobbiescraft .something-else > button {
  position: absolute;
  top: 0;
  right: 28px;
  -webkit-transform: translate(0px, -28px);
          transform: translate(0px, -28px);
}
.toyhobbiescraft .something-else .mdl-card__media {
  font-size: 13px;
  font-weight: 500;
  border-top-left-radius: 2px;
  border-top-right-radius: 2px;
}
.toyhobbiescraft .something-else .mdl-card__media img {
  width: 64px;
  height: 64px;
  margin-bottom: 10px;
}
.toyhobbiescraft .something-else .mdl-card__supporting-text {
  background-color: #F5F5F5;
  border-bottom-left-radius: 2px;
  border-bottom-right-radius: 2px;
}
.toyhobbiescraft .on-the-road-again .mdl-card__media {
  background-image: url('../../images/road.jpg');
}
.toyhobbiescraft .shopping .mdl-card__media {
  background-image: url('../../images/shopping.jpg');
}
.toyhobbiescraft .mdl-card > a {
  color: inherit;
  text-decoration: none;
  font-weight: inherit;
}
.toyhobbiescraft .mdl-card h3 {
  margin: 0;
}
.toyhobbiescraft .mdl-card h3 a {
  text-decoration: none;
}
.toyhobbiescraft .mdl-card h3.quote:before, .toyhobbiescraft .mdl-card h3.quote:after {
  display: block;
  font-size: 3em;
  margin-top: 0.5em;
}
.toyhobbiescraft .mdl-card h3.quote:before {
  content: '“';
}
.toyhobbiescraft .mdl-card h3.quote:after {
  content: '”';
}
.toyhobbiescraft--blogpost .custom-header {
  background-color: transparent;
}
.toyhobbiescraft--blogpost .meta > * {
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
}
.toyhobbiescraft--blogpost .meta + .mdl-card__supporting-text {
  border: 0;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-flex-direction: column;
      -ms-flex-direction: column;
          flex-direction: column;
}
.toyhobbiescraft--blogpost .meta + .mdl-card__supporting-text p {
  max-width: 512px;
  margin: 16px auto;
  font-size: 16px;
  line-height: 28px;
}
.toyhobbiescraft--blogpost .demo-back {
  position: absolute;
  top: 16px;
  left: 16px;
  color: white;
  z-index: 9999;
}
.toyhobbiescraft .section-spacer {
  -webkit-flex-grow: 1;
      -ms-flex-positive: 1;
          flex-grow: 1;
}
.toyhobbiescraft .something-else {
  overflow: visible;
  z-index: 10;
}
.toyhobbiescraft .amazing .mdl-card__title {
  background-color: #263238;
}

/* Fixes for IE 10 */
.mdl-grid {
  display: -webkit-flex !important;
  display: -ms-flexbox !important;
  display: flex !important;
}
.social-btn {
  background-position: center;
  background-size: contain;
  background-repeat: no-repeat;
  background-color: transparent;
  margin: 0 16px;
  width: 24px;
  height: 24px;
  cursor: pointer;
  opacity: 0.46;
  border-radius: 2px;
}
.social-btn__twitter {
  background-image: url('https://www.gstatic.com/images/icons/material/system/2x/post_twitter_black_24dp.png');
}
.social-btn__blogger {
  background-image: url('https://www.gstatic.com/images/icons/material/system/2x/post_facebook_black_24dp.png');
}
.social-btn__gplus {
  background-image: url('https://www.gstatic.com/images/icons/material/system/2x/post_gplus_black_24dp.png');
}
.social-btn__share {
  color: rgba(0, 0, 0, 0.54);
  background: transparent;
}
.toyhobbiescraft .mdl-mini-footer {
  margin-top: 80px;
  height: 120px;
  padding: 40px;
  -webkit-align-items: center;
      -ms-flex-align: center;
          align-items: center;
  background-color: white;
  box-sizing: border-box;
}

</style>

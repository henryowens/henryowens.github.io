<template>
  <div class="home">
    <!-- <maintainence /> -->
    <div class="landing">
      <ho-background> </ho-background>
      <div class="header" style="position: relative">
        <div class="top-bar">
          <div class="buttons">
            <div class="close"></div>
            <div class="mini"></div>
            <div class="maxi"></div>
          </div>
        </div>
        <div class="console">
          <p
            class="console-item"
            style="text-align: center; width: 100%; display: inline !important"
          >
            👋 Hi, I'm Henry
          </p>
          <p
            class="console-item"
            style="text-align: center; width: 100%; display: inline !important"
          >
            Web Deveoper
          </p>

          <p class="console-item"></p>

          <p class="console-item" style="margin: 0 auto">
            <ho-icon name="mongodb" style="height: 26px" />
            <span> | </span>
            <ho-icon name="typescript" style="height: 26px" />
            <span> | </span>
            <ho-icon name="vuejs" style="height: 26px" />
            <span> | </span>
            <ho-icon name="nodejs" class="node-style" style="height: 26px" />
            <!-- <font-awesome-icon
              :icon="['fab', 'node']"
              style="
                color: #68a063;
                height: 26px !important;
                width: auto !important;
              "
            /> -->
          </p>

          <p class="console-item"></p>
          <p class="console-item"></p>
          <p class="console-item"></p>
          <p class="console-item"></p>

          <p class="console-item">
            <span class="pretext">[henryowens.net]:</span>
            <span class="emoji">📁</span>
            <router-link to="portfolio">Portfolio </router-link>
          </p>

          <p class="console-item" style="display: flex">
            <span class="pretext">[henryowens.net]:</span>
            <span class="emoji">
              <ho-icon name="npm" class="custom" />
            </span>
            <router-link to="packages" style="display: flex">
              Packages</router-link
            >
          </p>

          <p class="console-item">
            <span class="pretext">[henryowens.net]:</span>
            <span class="emoji">📧</span>
            <router-link to="contact">Contact</router-link>
          </p>

          <p class="console-item"></p>
          <p class="console-item"></p>
          <p class="console-item"></p>
          <p class="console-item"></p>

          <p class="console-item">
            <span class="pretext">[henryowens.net]:</span> Thanks for checking
            in from {{ place.neighbourhood }}, {{ place.town }} 📍
          </p>
          <p class="console-item" v-for="(message, x) in messages" :key="x">
            <span class="pretext">[henryowens.net]:</span> {{ message }}
          </p>
          <p class="input-wrapper">
            [henryowens.net]:
            <span id="inputWrapper">
              <input
                type="text"
                :class="width"
                v-model="text"
                @keyup.enter="submitText"
              />
              <span v-if="cursorActive" :class="curPos">></span>
            </span>
            <!-- <span v-if="cursorActive">></span> -->
          </p>
        </div>
        <!-- <div class="pre-text">
          <p>henry-owens:</p>
        </div>
        <div class="console" :class="marker">
          <p>
            {{ activeText }}
          </p>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Maintainence from "@/components/Maintainence/Maintainence.vue";
import { style } from "typestyle";
import { px } from "csx";
import axios, { AxiosResponse } from "axios";

function getLocation(lat: string, long: string): Promise<AxiosResponse> {
  return axios.get(
    `https://eu1.locationiq.com/v1/reverse.php?key=pk.989bdd4b49af44bf5359224d3f390579&lat=${lat}&lon=${long}&format=json`
  );
}

@Options({
  components: { Maintainence },
})
export default class Home extends Vue {
  public cursorActive = false;
  public text = "";

  public styleObject = {
    "--cursorActive": this.cursorActive ? ">" : "",
  };

  public messages: string[] = [];

  public place = {
    neighbourhood: sessionStorage.getItem("neighbourhood"),
    town: sessionStorage.getItem("town"),
  };

  // public messages = ["web dev", "typescript", "vue js"];
  // public activeText = "";
  // public activeMessage = 0;
  // public activeLetter = 0;
  // public removeMode = false;

  // public remove(): void {
  //   this.activeText = this.activeText.slice(0, -1);
  // }

  // get marker(): string {
  //   return style({
  //     $nest: {
  //       "&::after": {
  //         backgroundColor: this.activeText === "" ? "none" : "white",
  //       },
  //     },
  //   });
  // }

  get width(): string {
    return style({
      width: px(this.text.length * 9.5),
    });
  }

  get blinker(): string {
    return style({
      $nest: {
        "::after": {
          display: this.cursorActive ? "block" : "none",
        },
      },
    });
  }

  public submitText(): void {
    this.messages.push(this.text);
    this.text = "";
  }

  get curPos(): string {
    return style({
      marginLeft: this.text.length === 0 ? px(-17) : 0,
      pointerEvents: "none",
    });
  }

  public mounted(): void {
    navigator.geolocation.getCurrentPosition((result) => {
      const { latitude, longitude } = result.coords;
      getLocation(latitude.toString(), longitude.toString()).then((resp) => {
        sessionStorage.setItem("town", resp.data.address.town);
        sessionStorage.setItem(
          "neighbourhood",
          resp.data.address.neighbourhood
        );
        this.place.town = resp.data.address.town;
        this.place.neighbourhood = resp.data.address.neighbourhood;
      });
    });
    setInterval(async () => {
      this.cursorActive = !this.cursorActive;

      // if (this.removeMode) {
      //   if (this.activeText !== "") {
      //     this.remove();
      //     return;
      //   }
      //   this.removeMode = false;
      //   this.activeMessage++;
      //   this.activeLetter = 0;
      // }

      // if (!this.messages[this.activeMessage]) {
      //   console.log("done whole thing");
      //   this.activeMessage = 0;
      //   this.activeText = "";
      //   this.activeLetter = 0;
      //   return;
      // }
      // if (!this.messages[this.activeMessage][this.activeLetter]) {
      //   this.removeMode = true;
      //   return;
      // }

      // this.activeText = `${this.activeText}${
      //   this.messages[this.activeMessage][this.activeLetter]
      // }`;
      // this.activeLetter++;
      // // this.activeText = `${this.activeText}${
      // //   this.messages[this.activeMessage]
      // // }`;
    }, 500);
  }

  get cursor(): string {
    return "";
  }
}
</script>

<style>
/* .landing {
  height: calc(100vh - 105px);
} */

.landing .background {
  position: absolute;
  left: 0;
  width: 100%;
  top: 85px;
  height: calc(100vh - 85px);
}

@import url("https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap");

/* .header {
  font-family: "Source Code Pro", monospace;
  padding: 10px 20px;
  font-size: 32px;
  display: flex;
  flex-wrap: wrap;
  position: relative;
  color: white;
  margin: 0 auto;
  max-width: 600px;
  white-space: break-spaces;
  background-color: #202020;
  border-radius: 5px;
}

.header div {
  min-width: 250px;
}

.header p {
  margin: 0;
  min-height: 40px;
}

span.console p::after {
  content: "";
  width: 14px;
  height: 38px;
  border: 2px solid white;
  position: absolute;
} */

.header {
  margin: 40px auto;
  overflow: hidden;
  max-width: 750px;
}
.top-bar {
  background: linear-gradient(0deg, rgb(28, 28, 30), rgb(44, 44, 46));
  height: 20px;
  border-bottom: 1px solid rgb(28, 28, 30);
  border-radius: 5px 5px 0 0;
  box-shadow: 0 10px 60px rgb(0 0 0 / 20%);
  padding: 0 10px;
}
.top-bar .buttons {
  display: flex;
  height: 100%;
  justify-content: flex-start;
  align-items: center;
  align-content: center;
}
.top-bar .buttons div {
  width: 10px;
  height: 10px;
  border-radius: 100%;
}
.top-bar .buttons .close {
  background-color: #fb4948;
}
.top-bar .buttons .mini {
  background-color: #864502;
  margin: 0 8px;
}
.top-bar .buttons .maxi {
  background-color: #2ac833;
}

.console {
  height: 450px;
  background: #000;
  font-family: "Source Code Pro", monospace !important;
  color: #d0cfcf !important;
  padding: 10px;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  overflow-y: hidden;
}

.console p {
  margin: 0;
}
.console .blinker::after {
  content: --cursorActive;
}

.console input {
  background: none;
  border: none;
  font-family: "Source Code Pro", monospace !important;
  color: #d0cfcf !important;
  font-size: 1em;
  min-width: 9px;
  caret-color: transparent;
  padding-right: 5px;
}

.console input:focus {
  outline: none;
}

.console a {
  color: #aba7a7;
}
.console a:hover,
.console a:focus {
  color: #fff;
}

.console .console-item {
  display: flex;
  justify-content: end;
  align-items: center;
  min-height: 26px;
}
.console-item .pretext {
  padding-right: 7px;
}

@media screen and (max-width: 550px) {
  .console-item .pretext {
    display: none;
  }
}

.console-item .icons-container {
  display: grid;
  grid-template-columns: 40px 20px 40px 20px 35px 20px 65px;
  grid-gap: 6px;
  justify-items: center;
  align-items: center;
  justify-content: center;
}

.node-style svg {
  width: auto !important;
}

.emoji {
  min-width: 28px;
  margin-right: 5px;
}

.emoji .custom svg {
  margin: 0;
  height: auto !important;
  padding-top: 7px;
}

.console-item .input-wrapper {
  margin-top: 15px;
}
</style>

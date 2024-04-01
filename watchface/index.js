try {
    (() => {
        var __$$app$$__ = __$$hmAppManager$$__.currentApp;
        var __$$module$$__ = __$$app$$__.current;
        var h = new DeviceRuntimeCore.WidgetFactory(new DeviceRuntimeCore.HmDomApi(__$$app$$__, __$$module$$__), 'drink');
        'use strict';
        console.log("----->>>current");
        console.log(__$$hmAppManager$$__.currentApp.pid);
        console.log(__$$hmAppManager$$__.currentApp.current);

        let AodNum = [];
        let AodSmallNum = [];
        let AodWeek = [];

        for (let i = 0; i < 10; i++) { 
            AodNum.push(`images/AodNum/${i}.png`)
            AodSmallNum.push(`images/num/${i}.png`)
        }
        for (let i = 1; i < 8; i++) {
     
            AodWeek.push(`images/AodWeek/${i}.png`)
        }
        const objWeekOption = {
            x: 64,
            y: 22,
            week_en: AodWeek,
            week_sc: AodWeek,
            week_tc: AodWeek,
            show_level: hmUI.show_level.ONLY_NORMAL
        }
  
        let objTime = {
            hour_zero: true,
            hour_startX: 2,
            hour_startY: 86,
            hour_array: AodNum,
            hour_align: hmUI.align.LEFT,
            hour_space: 8,
            minute_space: 8,
            minute_zero: true,
            minute_startX: 2,
            minute_startY: 255,
            minute_array: AodNum,
            minute_align: hmUI.align.LEFT,
            show_level: hmUI.show_level.ONLY_NORMAL,
        }
        let objTime_Aod = {
            hour_zero: true,
            hour_startX: 8,
            hour_startY: 86,
            hour_array: AodNum,
            hour_align: hmUI.align.LEFT,
            hour_space: 4,
            minute_space: 4,
            minute_zero: true,
            minute_startX: 8,
            minute_startY: 255,
            minute_array: AodNum,
            minute_align: hmUI.align.LEFT,
            show_level: hmUI.show_level.ONLY_AOD,
        }
        let objMonthOption = {
            month_startX: 10,
            month_startY: 55,
            month_sc_array: AodSmallNum,
            month_tc_array: AodSmallNum,
            month_en_array: AodSmallNum,
            month_unit_sc: "images/state/datexiegang.png",
            month_unit_tc: "images/state/datexiegang.png",
            month_unit_en: "images/state/datexiegang.png",
            month_align: hmUI.align.RIGHT,
            month_zero: 0,
            month_follow: 0,
            month_space: 0,
            month_is_character: !1,
            day_startX: 50,
            day_startY: 55,
            day_zero: 1,
            day_en_array: AodSmallNum,
            day_sc_array: AodSmallNum,
            day_tc_array: AodSmallNum,
			day_follow: 1,
            day_space: 0,
            day_is_character: !1,
			day_align: hmUI.align.left,
            show_level: hmUI.show_level.ONLY_NORMAL,
        }


        const objBatteryText = {
            x: 115,
            y: 55,
            type: hmUI.data_type.BATTERY,
            font_array: AodSmallNum,
            align_h: hmUI.align.RIGHT,
            show_level: hmUI.show_level.ONLY_NORMAL,
            unit_sc: "images/state/percent.png",
            unit_tc: "images/state/percent.png",
            unit_en: "images/state/percent.png"
        }
     
       
        const objImgBg = {
            objBgImg: { 
                x: 0,
                y: 0,
                src: "images/bg/bg.png",
                show_level: hmUI.show_level.ONLY_NORMAL,
            }
        }


        let objHeartText = {
            x: 110,
            y: 417,
            type: hmUI.data_type.HEART,
            unit_sc: "images/state/heart.png",
            unit_tc: "images/state/heart.png",
            unit_en: "images/state/heart.png",
            font_array: AodSmallNum,
            align_h: hmUI.align.RIGHT,
            invalid_image: `images/AodSmallNum/0.png`,
            show_level: hmUI.show_level.ONLY_NORMAL,
        }

        
        const objStepText = {
            x: 15,
            y: 417,
            type: hmUI.data_type.STEP,
            font_array: AodSmallNum,
            align_h: hmUI.align.LEFT,
            show_level: hmUI.show_level.ONLY_NORMAL,
        }
        const Aod_objStepText = {
            x: 60,
            y: 440,
         
            type: hmUI.data_type.STEP,
            font_array: AodSmallNum,
            align_h: hmUI.align.CENTER_H,
            show_level: hmUI.show_level.ONLY_AOD,
        }
      
        const logger = DeviceRuntimeCore.HmLogger.getLogger("defult");
        __$$module$$__.module = DeviceRuntimeCore.WatchFace({
            init_view() {
                hmUI.createWidget(hmUI.widget.IMG, objImgBg.objBgImg)
                hmUI.createWidget(hmUI.widget.TEXT_IMG, objHeartText)
                hmUI.createWidget(hmUI.widget.IMG_WEEK, objWeekOption)
                hmUI.createWidget(hmUI.widget.IMG_TIME, objTime)
                hmUI.createWidget(hmUI.widget.TEXT_IMG, objBatteryText)
                hmUI.createWidget(hmUI.widget.IMG_DATE, objMonthOption)
                hmUI.createWidget(hmUI.widget.TEXT_IMG, objStepText)

                hmUI.createWidget(hmUI.widget.IMG_TIME, objTime_Aod)
                hmUI.createWidget(hmUI.widget.TEXT_IMG, Aod_objStepText)
          
             



                let addCover = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 2,
                    y: 86,
                    w: 400,
                    h: 170
                });
                let subCover = hmUI.createWidget(hmUI.widget.TEXT, {
                    x: 2,
                    y: 255,
                    w: 400,
                    h: 170
                });
                addCover.addEventListener(hmUI.event.CLICK_UP, function (info) {
                    let bri = hmSetting.getBrightness() + 20
                    if (bri > 100)
                        bri = 100
                    hmSetting.setBrightness(bri)
                });
                subCover.addEventListener(hmUI.event.CLICK_UP, function (info) {
                    let bri = hmSetting.getBrightness() - 20
                    if (bri < 0)
                        bri = 0
                    hmSetting.setBrightness(bri);
                });
            },

            onInit() {
                console.log('index page.js on init invoke');
                this.init_view();
            },
            onReady() {
                console.log('index page.js on ready invoke')
            },
            onShow() {
                console.log('index page.js on show invoke')
            },
            onHide() {
                console.log('index page.js on hide invoke')
            },
            onDestory() {
                console.log('index page.js on destory invoke')
            },
        });
    })()
} catch (e) {
    console.log(e)
}

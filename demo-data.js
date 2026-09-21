"use strict";
window.CLA_SVS_DEMO_DATA = {
  "summary": {
    "caseCount": 16,
    "modelCount": 5,
    "taskCoverage": {
      "decrease": 4,
      "increase": 4,
      "keep_quantity_full_changes": 4,
      "keep_quantity_partial_changes": 4
    }
  },
  "cases": [
    {
      "caseId": "case01",
      "taskType": "decrease",
      "singer": "ZH-Alto-1",
      "song": "安和桥",
      "style": "Vibrato",
      "lyricsSource": "我知道这个世界每天都有太多遗憾",
      "lyricsTarget": "我知道这世界每天太多遗憾",
      "referenceMelody": "/eval_assets/case01/reference_melody.wav",
      "models": [
        {
          "modelId": "model1",
          "system": "clasvs",
          "audio": "/eval_assets/case01/C.wav",
          "metrics": {
            "fpc": 0.8873490227211027,
            "per": 0,
            "sim": 0.9547139406204224
          }
        },
        {
          "modelId": "model2",
          "system": "vevo2",
          "audio": "/eval_assets/case01/A.wav",
          "metrics": {
            "fpc": 0.8772312321811591,
            "per": 0,
            "sim": 0.9044981598854065
          }
        },
        {
          "modelId": "model3",
          "system": "ying",
          "audio": "/eval_assets/case01/D.wav",
          "metrics": {
            "fpc": 0.839070815242804,
            "per": 0.08333333333333333,
            "sim": 0.8548915386199951
          }
        },
        {
          "modelId": "model4",
          "system": "soulx",
          "audio": "/eval_assets/case01/B.wav",
          "metrics": {
            "fpc": 0.7043652761040825,
            "per": 0.14285714285714285,
            "sim": 0.8457680940628052
          }
        },
        {
          "modelId": "model5",
          "system": "tcsinger",
          "audio": "/eval_assets/case01/E.wav",
          "metrics": {
            "cer": 0.9166666666666666,
            "fpc": 0.7223615005796616,
            "per": 0.75,
            "sim": 0.9176751375198364
          }
        }
      ]
    },
    {
      "caseId": "case02",
      "taskType": "decrease",
      "singer": "ZH-Alto-1",
      "song": "成都",
      "style": "Vibrato",
      "lyricsSource": "让我掉下眼泪的不止昨夜的酒",
      "lyricsTarget": "掉下眼泪的不止昨夜酒",
      "referenceMelody": "/eval_assets/case02/reference_melody.wav",
      "models": [
        {
          "modelId": "model1",
          "system": "clasvs",
          "audio": "/eval_assets/case02/D.wav",
          "metrics": {
            "fpc": 0.9623652244747031,
            "per": 0,
            "sim": 0.982629120349884
          }
        },
        {
          "modelId": "model2",
          "system": "vevo2",
          "audio": "/eval_assets/case02/B.wav",
          "metrics": {
            "fpc": 0.8694262989386822,
            "per": 0.2,
            "sim": 0.9250286817550659
          }
        },
        {
          "modelId": "model3",
          "system": "ying",
          "audio": "/eval_assets/case02/C.wav",
          "metrics": {
            "fpc": 0.9267675456629915,
            "per": 0.1,
            "sim": 0.8932878971099854
          }
        },
        {
          "modelId": "model4",
          "system": "soulx",
          "audio": "/eval_assets/case02/A.wav",
          "metrics": {
            "fpc": 0.788027639566521,
            "per": 0.18181818181818182,
            "sim": 0.9662948250770569
          }
        },
        {
          "modelId": "model5",
          "system": "tcsinger",
          "audio": "/eval_assets/case02/E.wav",
          "metrics": {
            "cer": 1.6,
            "fpc": 0.6403589682394976,
            "per": 1.4,
            "sim": 0.931662917137146
          }
        }
      ]
    },
    {
      "caseId": "case03",
      "taskType": "decrease",
      "singer": "ZH-Tenor-1",
      "song": "好久不见",
      "style": "Breathy",
      "lyricsSource": "走过你来时的路想象着",
      "lyricsTarget": "走过你来时想象着",
      "referenceMelody": "/eval_assets/case03/reference_melody.wav",
      "models": [
        {
          "modelId": "model1",
          "system": "clasvs",
          "audio": "/eval_assets/case03/D.wav",
          "metrics": {
            "fpc": 0.9916474056525363,
            "per": 0,
            "sim": 0.9600193500518799
          }
        },
        {
          "modelId": "model2",
          "system": "vevo2",
          "audio": "/eval_assets/case03/A.wav",
          "metrics": {
            "fpc": 0.940387940503879,
            "per": 0.125,
            "sim": 0.938239336013794
          }
        },
        {
          "modelId": "model3",
          "system": "ying",
          "audio": "/eval_assets/case03/B.wav",
          "metrics": {
            "fpc": 0.9817482060883015,
            "per": 0.125,
            "sim": 0.973781406879425
          }
        },
        {
          "modelId": "model4",
          "system": "soulx",
          "audio": "/eval_assets/case03/C.wav",
          "metrics": {
            "fpc": 0.9147206343892754,
            "per": 0.2222222222222222,
            "sim": 0.9748566746711731
          }
        },
        {
          "modelId": "model5",
          "system": "tcsinger",
          "audio": "/eval_assets/case03/E.wav",
          "metrics": {
            "cer": 0.75,
            "fpc": 0.51050783920813,
            "per": 0.75,
            "sim": 0.9089652895927429
          }
        }
      ]
    },
    {
      "caseId": "case04",
      "taskType": "decrease",
      "singer": "ZH-Tenor-1",
      "song": "我真的受伤了",
      "style": "Vibrato",
      "lyricsSource": "灯光也暗了音乐低声了",
      "lyricsTarget": "灯光暗了音乐低了",
      "referenceMelody": "/eval_assets/case04/reference_melody.wav",
      "models": [
        {
          "modelId": "model1",
          "system": "clasvs",
          "audio": "/eval_assets/case04/C.wav",
          "metrics": {
            "fpc": 0.9863214954860662,
            "per": 0,
            "sim": 0.9829136729240417
          }
        },
        {
          "modelId": "model2",
          "system": "vevo2",
          "audio": "/eval_assets/case04/B.wav",
          "metrics": {
            "fpc": 0.9438049419272421,
            "per": 0,
            "sim": 0.9586254358291626
          }
        },
        {
          "modelId": "model3",
          "system": "ying",
          "audio": "/eval_assets/case04/D.wav",
          "metrics": {
            "fpc": 0.9325433159204646,
            "per": 0.13333333333333333,
            "sim": 0.9410471320152283
          }
        },
        {
          "modelId": "model4",
          "system": "soulx",
          "audio": "/eval_assets/case04/A.wav",
          "metrics": {
            "fpc": 0.9599923331832335,
            "per": 0.23529411764705882,
            "sim": 0.9760750532150269
          }
        },
        {
          "modelId": "model5",
          "system": "tcsinger",
          "audio": "/eval_assets/case04/E.wav",
          "metrics": {
            "cer": 0.875,
            "fpc": 0.7605148013377202,
            "per": 0.7333333333333333,
            "sim": 0.9113535284996033
          }
        }
      ]
    },
    {
      "caseId": "case05",
      "taskType": "increase",
      "singer": "ZH-Alto-1",
      "song": "江南",
      "style": "Breathy",
      "lyricsSource": "风到这里就是黏黏住过客的思念",
      "lyricsTarget": "风到这里就是黏腻黏住过客的无穷思念",
      "referenceMelody": "/eval_assets/case05/reference_melody.wav",
      "models": [
        {
          "modelId": "model1",
          "system": "clasvs",
          "audio": "/eval_assets/case05/D.wav",
          "metrics": {
            "fpc": 0.9931391019316786,
            "per": 0,
            "sim": 0.9863759875297546
          }
        },
        {
          "modelId": "model2",
          "system": "vevo2",
          "audio": "/eval_assets/case05/B.wav",
          "metrics": {
            "fpc": 0.9607803344332714,
            "per": 0.058823529411764705,
            "sim": 0.9718075394630432
          }
        },
        {
          "modelId": "model3",
          "system": "ying",
          "audio": "/eval_assets/case05/A.wav",
          "metrics": {
            "fpc": 0.9840927482905937,
            "per": 0.058823529411764705,
            "sim": 0.9704458713531494
          }
        },
        {
          "modelId": "model4",
          "system": "soulx",
          "audio": "/eval_assets/case05/C.wav",
          "metrics": {
            "fpc": 0.8777087886219366,
            "per": 0.16666666666666666,
            "sim": 0.9785529375076294
          }
        },
        {
          "modelId": "model5",
          "system": "tcsinger",
          "audio": "/eval_assets/case05/E.wav",
          "metrics": {
            "cer": 2.8823529411764706,
            "fpc": 0.4604946150453899,
            "per": 2.4705882352941178,
            "sim": 0.9141497611999512
          }
        }
      ]
    },
    {
      "caseId": "case06",
      "taskType": "increase",
      "singer": "ZH-Alto-1",
      "song": "慢慢喜欢你",
      "style": "Vibrato",
      "lyricsSource": "不然怎么一直牵我的手不放",
      "lyricsTarget": "不然怎么一直轻轻牵我的手不放",
      "referenceMelody": "/eval_assets/case06/reference_melody.wav",
      "models": [
        {
          "modelId": "model1",
          "system": "clasvs",
          "audio": "/eval_assets/case06/B.wav",
          "metrics": {
            "fpc": 0.942241123913612,
            "per": 0,
            "sim": 0.9753650426864624
          }
        },
        {
          "modelId": "model2",
          "system": "vevo2",
          "audio": "/eval_assets/case06/C.wav",
          "metrics": {
            "fpc": 0.7140847523116053,
            "per": 0.14285714285714285,
            "sim": 0.9609532952308655
          }
        },
        {
          "modelId": "model3",
          "system": "ying",
          "audio": "/eval_assets/case06/A.wav",
          "metrics": {
            "fpc": 0.8301099245413953,
            "per": 0.10714285714285714,
            "sim": 0.9753067493438721
          }
        },
        {
          "modelId": "model4",
          "system": "soulx",
          "audio": "/eval_assets/case06/D.wav",
          "metrics": {
            "fpc": 0.6006861186037765,
            "per": 0.2,
            "sim": 0.9765304923057556
          }
        },
        {
          "modelId": "model5",
          "system": "tcsinger",
          "audio": "/eval_assets/case06/E.wav",
          "metrics": {
            "cer": 0.2857142857142857,
            "fpc": 0.5501930889235906,
            "per": 0.2857142857142857,
            "sim": 0.943935751914978
          }
        }
      ]
    },
    {
      "caseId": "case07",
      "taskType": "increase",
      "singer": "ZH-Tenor-1",
      "song": "南山南",
      "style": "Pharyngeal",
      "lyricsSource": "北海北北海有墓碑",
      "lyricsTarget": "在北海北北海海畔有墓碑",
      "referenceMelody": "/eval_assets/case07/reference_melody.wav",
      "models": [
        {
          "modelId": "model1",
          "system": "clasvs",
          "audio": "/eval_assets/case07/B.wav",
          "metrics": {
            "fpc": 0.8896800486229629,
            "per": 0,
            "sim": 0.932592511177063
          }
        },
        {
          "modelId": "model2",
          "system": "vevo2",
          "audio": "/eval_assets/case07/A.wav",
          "metrics": {
            "fpc": 0.7364397495227484,
            "per": 0.3181818181818182,
            "sim": 0.8985148668289185
          }
        },
        {
          "modelId": "model3",
          "system": "ying",
          "audio": "/eval_assets/case07/C.wav",
          "metrics": {
            "fpc": 0.8639851479861775,
            "per": 0,
            "sim": 0.9159543514251709
          }
        },
        {
          "modelId": "model4",
          "system": "soulx",
          "audio": "/eval_assets/case07/D.wav",
          "metrics": {
            "fpc": 0.8418926588926119,
            "per": 0.08333333333333333,
            "sim": 0.9010933041572571
          }
        },
        {
          "modelId": "model5",
          "system": "tcsinger",
          "audio": "/eval_assets/case07/E.wav",
          "metrics": {
            "cer": 1.2727272727272727,
            "fpc": 0.6115202547765975,
            "per": 0.9545454545454546,
            "sim": 0.9340199828147888
          }
        }
      ]
    },
    {
      "caseId": "case08",
      "taskType": "increase",
      "singer": "ZH-Tenor-1",
      "song": "失落沙洲",
      "style": "Vibrato",
      "lyricsSource": "想念的还是你望着我的眼波",
      "lyricsTarget": "想念的还是你望着我的温柔眼波",
      "referenceMelody": "/eval_assets/case08/reference_melody.wav",
      "models": [
        {
          "modelId": "model1",
          "system": "clasvs",
          "audio": "/eval_assets/case08/D.wav",
          "metrics": {
            "fpc": 0.9469137784258159,
            "per": 0,
            "sim": 0.9625722169876099
          }
        },
        {
          "modelId": "model2",
          "system": "vevo2",
          "audio": "/eval_assets/case08/B.wav",
          "metrics": {
            "fpc": 0.8608415838985256,
            "per": 0,
            "sim": 0.956309974193573
          }
        },
        {
          "modelId": "model3",
          "system": "ying",
          "audio": "/eval_assets/case08/A.wav",
          "metrics": {
            "fpc": 0.87919025672305,
            "per": 0,
            "sim": 0.9615861177444458
          }
        },
        {
          "modelId": "model4",
          "system": "soulx",
          "audio": "/eval_assets/case08/C.wav",
          "metrics": {
            "fpc": 0.8380180104119778,
            "per": 0.13333333333333333,
            "sim": 0.9384957551956177
          }
        },
        {
          "modelId": "model5",
          "system": "tcsinger",
          "audio": "/eval_assets/case08/E.wav",
          "metrics": {
            "cer": 0.5714285714285714,
            "fpc": 0.7822180127126939,
            "per": 0.5,
            "sim": 0.9444905519485474
          }
        }
      ]
    },
    {
      "caseId": "case09",
      "taskType": "keep_quantity_full_changes",
      "singer": "ZH-Alto-1",
      "song": "你给我听好",
      "style": "Glissando",
      "lyricsSource": "你给我听好想哭就要笑其实你知道烦恼会解决烦恼",
      "lyricsTarget": "他想对你说快乐要藏好可惜你明白现实不随你想象",
      "referenceMelody": "/eval_assets/case09/reference_melody.wav",
      "models": [
        {
          "modelId": "model1",
          "system": "clasvs",
          "audio": "/eval_assets/case09/B.wav",
          "metrics": {
            "fpc": 0.9673619091649471,
            "per": 0,
            "sim": 0.9647961258888245
          }
        },
        {
          "modelId": "model2",
          "system": "vevo2",
          "audio": "/eval_assets/case09/A.wav",
          "metrics": {
            "fpc": 0.8634634059179188,
            "per": 0.09090909090909091,
            "sim": 0.8876053094863892
          }
        },
        {
          "modelId": "model3",
          "system": "ying",
          "audio": "/eval_assets/case09/C.wav",
          "metrics": {
            "fpc": 0.9574191419673956,
            "per": 0.09090909090909091,
            "sim": 0.9115370512008667
          }
        },
        {
          "modelId": "model4",
          "system": "soulx",
          "audio": "/eval_assets/case09/D.wav",
          "metrics": {
            "fpc": 0.8413727198906574,
            "per": 0.1875,
            "sim": 0.94734126329422
          }
        },
        {
          "modelId": "model5",
          "system": "tcsinger",
          "audio": "/eval_assets/case09/E.wav",
          "metrics": {
            "cer": 1.0909090909090908,
            "fpc": 0.2142102032854192,
            "per": 0.9545454545454546,
            "sim": 0.8788056969642639
          }
        }
      ]
    },
    {
      "caseId": "case10",
      "taskType": "keep_quantity_full_changes",
      "singer": "ZH-Alto-1",
      "song": "画心",
      "style": "Mixed_Voice_and_Falsetto",
      "lyricsSource": "你的轮廓在黑夜之中淹没",
      "lyricsTarget": "我们秘密在时光深处漂浮",
      "referenceMelody": "/eval_assets/case10/reference_melody.wav",
      "models": [
        {
          "modelId": "model1",
          "system": "clasvs",
          "audio": "/eval_assets/case10/A.wav",
          "metrics": {
            "fpc": 0.9466074980342957,
            "per": 0,
            "sim": 0.9730862975120544
          }
        },
        {
          "modelId": "model2",
          "system": "vevo2",
          "audio": "/eval_assets/case10/D.wav",
          "metrics": {
            "fpc": 0.899980257324184,
            "per": 0.045454545454545456,
            "sim": 0.9534513354301453
          }
        },
        {
          "modelId": "model3",
          "system": "ying",
          "audio": "/eval_assets/case10/C.wav",
          "metrics": {
            "fpc": 0.9219328540717237,
            "per": 0,
            "sim": 0.8818175792694092
          }
        },
        {
          "modelId": "model4",
          "system": "soulx",
          "audio": "/eval_assets/case10/B.wav",
          "metrics": {
            "fpc": 0.8399626489589708,
            "per": 0.15384615384615385,
            "sim": 0.9606862664222717
          }
        },
        {
          "modelId": "model5",
          "system": "tcsinger",
          "audio": "/eval_assets/case10/E.wav",
          "metrics": {
            "cer": 0.45454545454545453,
            "fpc": 0.8749680146629997,
            "per": 0.2727272727272727,
            "sim": 0.7790242433547974
          }
        }
      ]
    },
    {
      "caseId": "case11",
      "taskType": "keep_quantity_full_changes",
      "singer": "ZH-Tenor-1",
      "song": "爱的回归线",
      "style": "Breathy",
      "lyricsSource": "童话剧情上演在某天再一次遇见",
      "lyricsTarget": "夏季繁花盛放于河畔又一度相逢",
      "referenceMelody": "/eval_assets/case11/reference_melody.wav",
      "models": [
        {
          "modelId": "model1",
          "system": "clasvs",
          "audio": "/eval_assets/case11/B.wav",
          "metrics": {
            "fpc": 0.9805788815373236,
            "per": 0,
            "sim": 0.9887219071388245
          }
        },
        {
          "modelId": "model2",
          "system": "vevo2",
          "audio": "/eval_assets/case11/A.wav",
          "metrics": {
            "fpc": 0.7179338578511585,
            "per": 0.07142857142857142,
            "sim": 0.9733816385269165
          }
        },
        {
          "modelId": "model3",
          "system": "ying",
          "audio": "/eval_assets/case11/C.wav",
          "metrics": {
            "fpc": 0.9390396530595105,
            "per": 0.17857142857142858,
            "sim": 0.9735661149024963
          }
        },
        {
          "modelId": "model4",
          "system": "soulx",
          "audio": "/eval_assets/case11/D.wav",
          "metrics": {
            "fpc": 0.6907433643097209,
            "per": 0.2,
            "sim": 0.9699978828430176
          }
        },
        {
          "modelId": "model5",
          "system": "tcsinger",
          "audio": "/eval_assets/case11/E.wav",
          "metrics": {
            "cer": 1.2857142857142858,
            "fpc": -0.10417829413021835,
            "per": 1,
            "sim": 0.7765597105026245
          }
        }
      ]
    },
    {
      "caseId": "case12",
      "taskType": "keep_quantity_full_changes",
      "singer": "ZH-Tenor-1",
      "song": "红玫瑰",
      "style": "Vibrato",
      "lyricsSource": "烂熟透红空洞了的瞳孔终于掏空终于有始无终",
      "lyricsTarget": "清晨微光舒展了的双臂已然唤醒已然又复苏醒",
      "referenceMelody": "/eval_assets/case12/reference_melody.wav",
      "models": [
        {
          "modelId": "model1",
          "system": "clasvs",
          "audio": "/eval_assets/case12/A.wav",
          "metrics": {
            "fpc": 0.9861400495689773,
            "per": 0.025,
            "sim": 0.9668954610824585
          }
        },
        {
          "modelId": "model2",
          "system": "vevo2",
          "audio": "/eval_assets/case12/C.wav",
          "metrics": {
            "fpc": 0.8181775861944475,
            "per": 0.1,
            "sim": 0.9548766613006592
          }
        },
        {
          "modelId": "model3",
          "system": "ying",
          "audio": "/eval_assets/case12/D.wav",
          "metrics": {
            "fpc": 0.9775418607751652,
            "per": 0.05,
            "sim": 0.8643299341201782
          }
        },
        {
          "modelId": "model4",
          "system": "soulx",
          "audio": "/eval_assets/case12/B.wav",
          "metrics": {
            "fpc": 0.9086313872736554,
            "per": 0.18181818181818182,
            "sim": 0.9475656747817993
          }
        },
        {
          "modelId": "model5",
          "system": "tcsinger",
          "audio": "/eval_assets/case12/E.wav",
          "metrics": {
            "cer": 0.5,
            "fpc": 0.8974882786588962,
            "per": 0.225,
            "sim": 0.8932498097419739
          }
        }
      ]
    },
    {
      "caseId": "case13",
      "taskType": "keep_quantity_partial_changes",
      "singer": "ZH-Alto-1",
      "song": "说谎",
      "style": "Breathy",
      "lyricsSource": "何况那算什么伤反正爱情不就这样",
      "lyricsTarget": "何况那叫什么事反正友情不就这样",
      "referenceMelody": "/eval_assets/case13/reference_melody.wav",
      "models": [
        {
          "modelId": "model1",
          "system": "clasvs",
          "audio": "/eval_assets/case13/D.wav",
          "metrics": {
            "fpc": 0.9807602189677643,
            "per": 0,
            "sim": 0.9560896158218384
          }
        },
        {
          "modelId": "model2",
          "system": "vevo2",
          "audio": "/eval_assets/case13/B.wav",
          "metrics": {
            "fpc": 0.9297447471182411,
            "per": 0,
            "sim": 0.9506034851074219
          }
        },
        {
          "modelId": "model3",
          "system": "ying",
          "audio": "/eval_assets/case13/A.wav",
          "metrics": {
            "fpc": 0.9584519944203888,
            "per": 0,
            "sim": 0.8925902247428894
          }
        },
        {
          "modelId": "model4",
          "system": "soulx",
          "audio": "/eval_assets/case13/C.wav",
          "metrics": {
            "fpc": 0.8913384243905014,
            "per": 0.1875,
            "sim": 0.9343006014823914
          }
        },
        {
          "modelId": "model5",
          "system": "tcsinger",
          "audio": "/eval_assets/case13/E.wav",
          "metrics": {
            "cer": 1.0666666666666667,
            "fpc": 0.877493535105862,
            "per": 0.8,
            "sim": 0.8862016201019287
          }
        }
      ]
    },
    {
      "caseId": "case14",
      "taskType": "keep_quantity_partial_changes",
      "singer": "ZH-Alto-1",
      "song": "温柔",
      "style": "Breathy",
      "lyricsSource": "天的温柔地的温柔像你抱着我",
      "lyricsTarget": "海的宽广山的巍峨像你牵着我",
      "referenceMelody": "/eval_assets/case14/reference_melody.wav",
      "models": [
        {
          "modelId": "model1",
          "system": "clasvs",
          "audio": "/eval_assets/case14/C.wav",
          "metrics": {
            "fpc": 0.8656860561203044,
            "per": 0,
            "sim": 0.9809855818748474
          }
        },
        {
          "modelId": "model2",
          "system": "vevo2",
          "audio": "/eval_assets/case14/D.wav",
          "metrics": {
            "fpc": 0.7716272781746698,
            "per": 0,
            "sim": 0.8809727430343628
          }
        },
        {
          "modelId": "model3",
          "system": "ying",
          "audio": "/eval_assets/case14/A.wav",
          "metrics": {
            "fpc": 0.8418779758915309,
            "per": 0,
            "sim": 0.9365542531013489
          }
        },
        {
          "modelId": "model4",
          "system": "soulx",
          "audio": "/eval_assets/case14/B.wav",
          "metrics": {
            "fpc": 0.8612874520994482,
            "per": 0,
            "sim": 0.9287683963775635
          }
        },
        {
          "modelId": "model5",
          "system": "tcsinger",
          "audio": "/eval_assets/case14/E.wav",
          "metrics": {
            "cer": 0.6923076923076923,
            "fpc": 0.6631780608535223,
            "per": 0.48,
            "sim": 0.9407077431678772
          }
        }
      ]
    },
    {
      "caseId": "case15",
      "taskType": "keep_quantity_partial_changes",
      "singer": "ZH-Tenor-1",
      "song": "听海",
      "style": "Mixed_Voice_and_Falsetto",
      "lyricsSource": "就连泪水也都不相信",
      "lyricsTarget": "就连风声也未曾聆听",
      "referenceMelody": "/eval_assets/case15/reference_melody.wav",
      "models": [
        {
          "modelId": "model1",
          "system": "clasvs",
          "audio": "/eval_assets/case15/C.wav",
          "metrics": {
            "fpc": 0.9693694329757707,
            "per": 0,
            "sim": 0.9009668827056885
          }
        },
        {
          "modelId": "model2",
          "system": "vevo2",
          "audio": "/eval_assets/case15/A.wav",
          "metrics": {
            "fpc": 0.5858296110786532,
            "per": 0,
            "sim": 0.8878988027572632
          }
        },
        {
          "modelId": "model3",
          "system": "ying",
          "audio": "/eval_assets/case15/B.wav",
          "metrics": {
            "fpc": 0.954811043200044,
            "per": 0,
            "sim": 0.814202070236206
          }
        },
        {
          "modelId": "model4",
          "system": "soulx",
          "audio": "/eval_assets/case15/D.wav",
          "metrics": {
            "fpc": 0.9142327818412845,
            "per": 0.1,
            "sim": 0.8513336777687073
          }
        },
        {
          "modelId": "model5",
          "system": "tcsinger",
          "audio": "/eval_assets/case15/E.wav",
          "metrics": {
            "cer": 0.4444444444444444,
            "fpc": 0.8915187172824446,
            "per": 0.3888888888888889,
            "sim": 0.790515661239624
          }
        }
      ]
    },
    {
      "caseId": "case16",
      "taskType": "keep_quantity_partial_changes",
      "singer": "ZH-Tenor-1",
      "song": "倒带",
      "style": "Mixed_Voice_and_Falsetto",
      "lyricsSource": "你该给的信赖被你亲手缓缓推入悬崖",
      "lyricsTarget": "我该给的等待被我亲手轻轻推入深海",
      "referenceMelody": "/eval_assets/case16/reference_melody.wav",
      "models": [
        {
          "modelId": "model1",
          "system": "clasvs",
          "audio": "/eval_assets/case16/D.wav",
          "metrics": {
            "fpc": 0.9769963066997234,
            "per": 0,
            "sim": 0.9730651378631592
          }
        },
        {
          "modelId": "model2",
          "system": "vevo2",
          "audio": "/eval_assets/case16/C.wav",
          "metrics": {
            "fpc": 0.9428196219135345,
            "per": 0.375,
            "sim": 0.9530747532844543
          }
        },
        {
          "modelId": "model3",
          "system": "ying",
          "audio": "/eval_assets/case16/B.wav",
          "metrics": {
            "fpc": 0.9499474159919657,
            "per": 0,
            "sim": 0.9140822291374207
          }
        },
        {
          "modelId": "model4",
          "system": "soulx",
          "audio": "/eval_assets/case16/A.wav",
          "metrics": {
            "fpc": 0.8919099447943994,
            "per": 0.08823529411764706,
            "sim": 0.9597671031951904
          }
        },
        {
          "modelId": "model5",
          "system": "tcsinger",
          "audio": "/eval_assets/case16/E.wav",
          "metrics": {
            "cer": 0.25,
            "fpc": 0.7521765060450378,
            "per": 0.25,
            "sim": 0.950236439704895
          }
        }
      ]
    }
  ]
};

const nations = [

    {
        id: "Du39n6zAFnue4ULbLBlq",
        flag: "https://s3.amazonaws.com/pix.iemoji.com/images/emoji/apple/ios-12/256/italy.png",
        name: "Italy",
      },

      {
        id: "OGBxuGB5q6CCBTTCyWfF",
        flag: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/114/flag-for-france_1f1eb-1f1f7.png",
        name: "France",
      },

      {
        id: "ZtzO4WjBIyXy28xVw2kY",
        flag: "https://emojipedia-us.s3.dualstack.us-west-1.amazonaws.com/thumbs/160/apple/114/flag-for-england_1f3f4-e0067-e0062-e0065-e006e-e0067-e007f.png",
        name: "England",
      },

];

const nationReducer = (state=nations, action) => {
    return state;
};

export default nationReducer;

import React from "react";
class Images extends React.Component{
    constructor(){
        super();
        this.state={
            imagescartoon : "https://th-i.thgim.com/public/migration_catalog/article10523422.ece/alternates/FREE_1200/24MP_Bommi_1.jpg"
        }
    }

    imageshandler=()=>{
  const teluguCartoonImages = [
  "https://i.ytimg.com/vi/v0PESWswZoM/maxresdefault.jpg",
  "https://cdn.telugumessages.com/2020/11/Jokes-on-Marraige.jpg",
  "https://img.freepik.com/premium-vector/illustration-indian-house-vector-artvillage-houseindian-village-background-cartoon_736686-382.jpg?w=2000",
  "https://www.indiantelevision.com/sites/default/files/images/tv-images/2019/03/19/motu.jpg",
  "https://1.bp.blogspot.com/-CETIRLtMJWI/WATzhN2X4CI/AAAAAAAAAIo/ObiK1J9UxogXPuocLD47aVWwBzSIed_GwCLcB/s1600/Telangana%2B-family-culture.jpg",
  "https://i.ytimg.com/vi/_yOM4V2c9FM/maxresdefault.jpg",
  "https://wallpapercave.com/wp/wp7845569.jpg",
  "https://i.pinimg.com/originals/3b/d9/95/3bd995e2ee459b1974e53a64e2c050f9.jpg",
  "https://www.shutterstock.com/image-vector/grihapravesham-significance-housewarming-gruhapravesha-pooja-260nw-2386430309.jpg",
  "https://i.pinimg.com/originals/01/7a/50/017a505de05a37c0037f733c32a3a2ca.jpg",
  "https://i.pinimg.com/736x/dd/04/ff/dd04ff0c03769cbc2dccc84018f14af8--telugu-cartoons.jpg",
  "https://i.pinimg.com/736x/f6/16/72/f6167299b6944330c6bd584b02c3896f.jpg",
  "http://www.teluguone.com/teluguoneUserFiles/28jan.jpg"
];


        let randomimages = Math.floor(Math.random()*teluguCartoonImages.length);
        let finalImages = teluguCartoonImages[randomimages]
        console.log(finalImages)
        this.setState({imagescartoon : finalImages})

    }

    render(){
        return(
            <div className="colors">
                <h1>Random Images</h1>
                <img src={this.state.imagescartoon} alt="" style={{width : "30%", height: "38vh"}}/><br></br>
                <button onClick={this.imageshandler}>Random images</button>
            </div>
        )
    }
}
export default Images;
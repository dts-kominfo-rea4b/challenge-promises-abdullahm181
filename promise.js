const { promiseTheaterIXX, promiseTheaterVGC } = require("./external.js");

// TODO: Buat fungsi promiseOutput sesuai ketentuan readme
//Punya Muhammad Amin Abdullah
const promiseOutput = async (emosi) =>{
  try{
    var JumlahMarah=0,JumlahTidakMarah=0;
    const XXI= await promiseTheaterIXX();
    const VGC= await promiseTheaterVGC();
    XXI.forEach(Sum);
    VGC.forEach(Sum);
    function Sum(item) {
      if(item.hasil=="marah")
        JumlahMarah++;
      if(item.hasil=="tidak marah")
        JumlahTidakMarah++;
    }
    if (emosi=="marah")
      console.log(JumlahMarah);
    if (emosi=="tidak marah")
      console.log(JumlahTidakMarah);
  }catch(rejectMessage){
    console.log(rejectMessage);
  }

}


module.exports = {
  promiseOutput,
};

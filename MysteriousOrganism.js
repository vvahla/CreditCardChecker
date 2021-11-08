// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G']
    return dnaBases[Math.floor(Math.random() * 4)] 
  };
  
  // Returns a random single stand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = []
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase())
    }
    return newStrand
  };
  
  const pAequorFactory = (number, arr) => {
    return {
      specimenNum: number,
      dna: arr,
      mutate(){
        let baseToMutate = arr[Math.floor(Math.random() * 15)];
        if(baseToMutate === 'A'){
          const randomBase = ['T', 'G', 'C'];
          arr[Math.floor(Math.random() * 15)] = randomBase[Math.floor(Math.random() * 3)];
        } else if(baseToMutate === 'T'){
          const randomBase = ['A', 'G', 'C'];
          arr[Math.floor(Math.random() * 15)] = randomBase[Math.floor(Math.random() * 3)];
        } else if(baseToMutate === 'G'){
          const randomBase = ['A', 'T', 'C'];
          arr[Math.floor(Math.random() * 15)] = randomBase[Math.floor(Math.random() * 3)];
        } else if(baseToMutate === 'C'){
          const randomBase = ['A', 'T', 'G'];
          arr[Math.floor(Math.random() * 15)] = randomBase[Math.floor(Math.random() * 3)];
        } 
      },
      compareDNA(pAequor){
        const dna1 = pAequor.dna;
        const dna2 = this.dna;
  
        for(let i = 0; i < dna1.length; i++){
          let currentBase = dna1[i];
          let matches = 0;
          for(let j = 0; j < dna2.length; j++){
            if(currentBase === dna2[j]){
              matches++;
            };
          };
        };
        const similarityPrecent = (matches / 15) * 100;
  
        console.log(`specimen #1 and specimen #2 have ${similarityPrecent} in common.`);
      },
      willLikelySurvive(){
        let matches = 0;
        for(let i = 0; i < this.dna.length; i++){
          if(this.dna[i] === 'C' || this.dna[i] === 'G'){
            matches++;
          };
        }
        const survivePrecent = (matches / 15) * 100;
          if(survivePrecent >= 60){
            return true;
          } else {
            return false;
          }
      }
    };
  };
  
  let pAequorsThatSurvive = [];
  
  let index = 1;
  while(pAequorsThatSurvive.length < 30){
    let newPAequor = pAequorFactory(index, mockUpStrand());
  
    if(newPAequor.willLikelySurvive()){
      pAequorsThatSurvive.push(newPAequor);
      index++;
    }
  }
  
  console.log(pAequorsThatSurvive);
  
  
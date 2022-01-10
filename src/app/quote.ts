export class Quote {
  
showDescription= false;

  constructor(
    public author: string,
    public description: string,
    public submitter: string,
    public completeDate: Date,
    public votes: number){
}


  
}

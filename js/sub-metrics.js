class subMetrics extends coreMetrics {
  constructor(element) {
    super(element, 'test');// coreMetrics and sets constructor of coreMetrics
    this.name = 'subMetrics';
  }

  questionIdentifier(id){
    console.log(id);
  };
}

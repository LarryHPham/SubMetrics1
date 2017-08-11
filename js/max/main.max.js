class coreMetrics {
    constructor(element, opts) {
        this.name = 'coreMetrics';
        this.container = element;
        this.options = opts;
        console.log('coreMetrics defined -> metrics container:', this.container);
        console.log('Options:', this.options);
    }


    snt_submetrics(options) {
        if (options) {
            console.log('Options:', options);
        } else {
            console.log('no options entered');
        }
    };


    test() {
        console.log('Hello World');
    };


    greaterThanOneHundred(num) {
        if (num > 100) {
            console.log('greater than 100:', num);
        } else if (num == 100) {
            console.log('equals 100:', num);
        } else {
            console.log('less than 100:', num);
        }
    };
};

class subMetrics extends coreMetrics {
  constructor(element) {
    super(element, 'test');// coreMetrics and sets constructor of coreMetrics
    this.name = 'subMetrics';
  }

  questionIdentifier(id){
    console.log(id);
  };
}

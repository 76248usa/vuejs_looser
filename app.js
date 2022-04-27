const app = Vue.createApp({
	data(){
		return {
			state: true,
			inputName: '',
			names: ['Lisa', 'Annie','Shannon','Peter','Sophia'],
			error: '',
			showError:false,
			result: ''
		}
	},
	computed:{
		isReady(){
			return this.names.length > 1;
		}
	},
	methods:{
		addNameToList(){
			const userName = this.inputName;
			if(this.validate(userName)){
				this.names.push(userName);
				this.inputName = '';
				this.showError = false;
			}else{
				this.showError = true;
			}
			
		},
		validate(value){
			this.error = '';
			if(value === ''){
				this.error = "Sorry, no empty name";
				return false;
			}
			if(this.names.includes(value)){
				this.error = "Sorry, name must be unique";
				return false;
			}
			return true
		},
		removeName(index){
			this.names.splice(index,1);
		},
		getRandomName(){
			return this.names[Math.floor(Math.random() * this.names.length)]
		},
		generateResult(){
			let rand = this.getRandomName();
			if(this.result !== ''){
				while(rand === this.result){
					rand = this.getRandomName();
				}
			}
			this.result = rand;

		},
		getNewResult(){
			this.generateResult();
		},

		showResults(){
			this.generateResult();
			this.state = false;
		},
		resetApp(){
			  
		}

	}

}).mount('#app');

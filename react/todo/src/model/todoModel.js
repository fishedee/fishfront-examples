function wait(time){
	return new Promise((resolve,reject)=>{
		setTimeout(resolve,time);
	});
}
export default Models.createClass({
	name:'todoModel',
	initialize(){
		this.state = Immutable.fromJS([]);
	},
	async fetch(){
		await wait(300);
		for( var i = 0 ; i != 5 ; ++i ){
			this.addTodo("fish"+i);
		}
	},
	addTodo(text){
		let id = this.state.reduce(
			(maxId,todo)=>Math.max(maxId,todo.get('id')),
			-1
		) + 1;
		this.state = this.state.push(Immutable.fromJS({
			text:text,
			id:id,
			completed:false
		}));
	},
	deleteTodo(id){
		this.state = this.state.filter(
			(todo)=>todo.get('id') != id
		);
	},
	editTodo(id,text){
		this.state = this.state.map(
			(todo)=>todo.get('id')!=id?todo:todo.set('text',text)
		);
	},
	completeTodo(id){
		this.state =  this.state.map(
			(todo)=>todo.get('id')!=id?todo:todo.update('completed',(completed)=>!completed)
		);
	},
	completeAll(){
		let areAllMarked = this.state.every(
			(todo)=>todo.get('completed')
		);
		this.state = this.state.map(
			(todo)=>todo.set('completed',!areAllMarked)
		);
	},
	clearCompleted(){
		this.state = this.state.filter(
			(todo)=>!todo.get('completed')
		)
	},
	get(){
		return this.state;
	}
});
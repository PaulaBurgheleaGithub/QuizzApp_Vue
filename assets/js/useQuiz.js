import { reactive, toRefs } from 'vue';

const state = reactive({
	questions: [],
	showResults: false,
	score: {
		correct: 0,
		total: 0,
		percentage: 0,
	},
	});

	export default () => {
	const { showResults, score } = toRefs(state);

	return {
		showResults,
		score,
	};
};

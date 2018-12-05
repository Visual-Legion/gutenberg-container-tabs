import axios from 'axios';

export const getCPTsWithArgs = (args) => {

	var {vl_ct_page_order, vl_ct_page_per_page} = args;

	var call = '/wp-json/tab/v1/examples';

	if (vl_ct_page_per_page) {
		call += `?vl_ct_page_per_page=${vl_ct_page_per_page}`
		if (vl_ct_page_order) {
			call += `&vl_ct_page_order=${vl_ct_page_order}`
		}
	} else {
		if (vl_ct_page_order) {
			call += `?vl_ct_page_order=${vl_ct_page_order}`
		}
	}

	console.log('call', call);

	return axios.get(call);
}

export const getLatestCPTs = () => {
	return axios.get('/wp-json/tab/v1/examples/latest');
}

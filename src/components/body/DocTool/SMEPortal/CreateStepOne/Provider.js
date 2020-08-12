import React from "react";

const DEFAULT_STATE = {
	"body": {
					"folder_id":1,
					"document_name":"clearpass test 222",
					"purpose":"something",
					"terminology": [
						{
							"terminology_name":"sssss",
							"terminology_definition":"yo yo"
						},
						{
							"terminology_name":"bs2",
							"terminology_definition":"yo yo"
						}
						],
					"dependency":"yo",
					"testing_components": [
							{
								"device_description":"something_",
								"hardware_model":"m1",
								"version":"blah"
							},
							{
								"device_description":"something__2",
								"hardware_model":"m2",
								"version":"blah2"
							}

					    ]
				}
}

export const ThemeContext = React.createContext({currentUser: "yo nabs context works"});


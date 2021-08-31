import React from "react";

import Context from "./context";

const AuthProvider = ({ children }) => {
	const [user, setUser] = React.useState(null);

	const login = async (params) => {
		if (!params.isLoading) {
			params.setIsLoading(true);
			const response = await fetch(
				`https://uwezo-app-323117.uc.r.appspot.com/admin/login`,
				{
					method: "POST",
					headers: {
						"Content-Type": "application/json",
						Accept: "application/json",
					},
					body: JSON.stringify(params.data),
				}
			);

			if (response.ok && response.status === 200) {
				const u = await response.json();
				setUser(u);
				params.history.push("/home");
			} else {
				alert("Username or password is incorrect");
			}
		}
		params.history.push("/home");
		params.setIsLoading(false);
	};

	const logout = async (params) => {
		if (!params.isLoading) {
			params.setIsLoading(true);
			const response = await fetch(
				`https://uwezo-app-323117.uc.r.appspot.com/admin/logout`,
				{
					method: "GET",
					headers: {
						Authorization: `Bearer ${user.token}`,
						Accept: "application/json",
					},
					body: JSON.stringify(params.data),
				}
			);

			if (response.ok && response.status === 200) {
				const u = await response.text();
				setUser({ User: {}, Token: u });
				params.history.push("/");
			} else {
				alert("Error");
			}
		}
		params.setIsLoading(false);
	};

	return (
		<Context.Provider value={{ user, login, logout }}>
			{children}
		</Context.Provider>
	);
};

export default AuthProvider;

import { CognitoUserPool } from "amazon-cognito-identity-js";

const poolData = {
  UserPoolId: "eu-central-1_b0igp8Dch",
  ClientId: "1f4cs42hvqut3glp1filo5pp5a",
};

const UserPool = new CognitoUserPool(poolData);

export default UserPool;

import React, { useContext } from "react";
import { View, Text, StyleSheet } from "react-native";
import BlogContext from "../data/BlogContext";

const IndexScreen = () => {
  const blogPosts = useContext(BlogContext);

  return (
    <View>
      <Text>Index Screen {value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default IndexScreen;

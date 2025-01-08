import React, { Component } from 'react';
import { ScrollView, Text, View, Image, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import icons from '@/constants/icons';
import images from '@/constants/images';

const SignIn = () => {

    const handleLogin = () => {
        // Implement login logic here
    }

    return (
        <SafeAreaView className='bg-white h-full'>
            <ScrollView contentContainerClassName='h-full'>
                <Image source={images.onboarding} className='w-full h-4/6'/>

                <View className='px-10'>
                    <Text className='text-base text-center uppercase font-rubik text-black-200'>
                        Welcome to real scout
                    </Text>

                    <Text className='text-3xl font-rubik-bold text-black-300 text-center mt-2'>
                        Let's get you closer to {'\n'}
                        <Text className='text-primary-300'>Your Ideal Home</Text>
                    </Text>

                    <Text className='text-lg text-center font-rubik text-black-200 mt-12'>
                        Login to real scout with Google
                    </Text>

                    <TouchableOpacity onPress={handleLogin} className='bg-white shadow-md shadow-zinc-300 rounded-full w-full py-4 mt-5'>
                        <View className='flex flex-row items-center justify-center'>
                            <Image source={icons.google} className='l-5 w-5' resizeMode='contain'/>

                            <Text className='text-center font-rubik-medium text-black-300 ml-2'>
                                Continue with Google
                            </Text>
                        </View>

                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default SignIn;
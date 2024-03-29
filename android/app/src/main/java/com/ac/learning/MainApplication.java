package com.ac.learning;

import android.app.Application;

import com.facebook.react.ReactApplication;



import com.rnfs.RNFSPackage;
import com.oblador.vectoricons.VectorIconsPackage;



import com.reactnativecommunity.viewpager.RNCViewPagerPackage;

import com.BV.LinearGradient.LinearGradientPackage;
import com.RNFetchBlob.RNFetchBlobPackage;
import com.rumax.reactnative.pdfviewer.PDFViewPackage;
import io.invertase.firebase.RNFirebasePackage;
import com.swmansion.gesturehandler.react.RNGestureHandlerPackage;
import com.facebook.react.ReactNativeHost;
import com.facebook.react.ReactPackage;
import com.facebook.react.shell.MainReactPackage;
import com.facebook.soloader.SoLoader;
import io.invertase.firebase.auth.RNFirebaseAuthPackage;
import co.apptailor.googlesignin.RNGoogleSigninPackage;
import io.invertase.firebase.storage.RNFirebaseStoragePackage;

import java.util.Arrays;
import java.util.List;



public class MainApplication extends Application implements ReactApplication {

  private final ReactNativeHost mReactNativeHost = new ReactNativeHost(this) {
    @Override
    public boolean getUseDeveloperSupport() {
      return BuildConfig.DEBUG;
    }

    @Override
    protected List<ReactPackage> getPackages() {
      return Arrays.<ReactPackage>asList(
          new MainReactPackage(),

          new RNFSPackage(),
           new RNFetchBlobPackage(),

           new LinearGradientPackage(),
            new VectorIconsPackage(),


            new RNCViewPagerPackage(),


            new PDFViewPackage(),
            new RNFirebasePackage(),
            new RNGestureHandlerPackage(),
            new RNFirebaseAuthPackage(),
            new RNFirebaseStoragePackage(),

            new RNGoogleSigninPackage()

      );
    }

    @Override
    protected String getJSMainModuleName() {
      return "index";
    }
  };

  @Override
  public ReactNativeHost getReactNativeHost() {
    return mReactNativeHost;
  }

  @Override
  public void onCreate() {
    super.onCreate();
    SoLoader.init(this, /* native exopackage */ false);
  }
}

package com.awspayroll

import android.location.Geocoder
import com.facebook.react.bridge.Arguments
import com.facebook.react.bridge.Promise
import com.facebook.react.bridge.ReactApplicationContext
import com.facebook.react.bridge.ReactContextBaseJavaModule
import com.facebook.react.bridge.ReactMethod
import java.util.Locale

class LocationAddressModule(private val reactContext: ReactApplicationContext) :
  ReactContextBaseJavaModule(reactContext) {

  override fun getName(): String = "LocationAddressModule"

  @ReactMethod
  fun reverseGeocode(latitude: Double, longitude: Double, promise: Promise) {
    try {
      val geocoder = Geocoder(reactContext, Locale.getDefault())
      @Suppress("DEPRECATION")
      val addresses = geocoder.getFromLocation(latitude, longitude, 1)
      val address = addresses?.firstOrNull()
      val map = Arguments.createMap()

      if (address != null) {
        val lines = (0..address.maxAddressLineIndex)
          .mapNotNull { index -> address.getAddressLine(index) }
          .filter { it.isNotBlank() }

        map.putString("address", lines.firstOrNull() ?: "")
        map.putString("name", address.featureName ?: address.subLocality ?: address.locality ?: "")
        map.putString("city", address.locality ?: address.subAdminArea ?: "")
        map.putString("state", address.adminArea ?: "")
        map.putString("country", address.countryName ?: "")
        map.putString("postalCode", address.postalCode ?: "")
      }

      promise.resolve(map)
    } catch (error: Exception) {
      promise.reject("LOCATION_ADDRESS_FAILED", error.message, error)
    }
  }
}
